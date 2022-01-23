/**
 * Creates an instance of SpaceX API Client for data retrieval.
 */
class SpaceXClient {
  #BASEURL = "https://api.spacexdata.com";
  #URL_PATHS = {
    CREW: "/v4/crew",
    LAUNCH: "/v5/launches",
    DRAGON: "/v4/dragons",
    ROCKET: "/v4/rockets",

    LAUNCHPAD: "/v4/launchpads",
  };

  constructor() {}

  //------------  Crew  ----------

  /**
   * Fetches all crew data.
   * @returns Array of all crew data.
   */
  async fetchAllCrewData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.CREW;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        const promises = allData.map((crewData) =>
          this.#createCrewData(crewData)
        );
        return Promise.all(promises);
      });
  }

  /**
   * Fetches crew data from API, retrieves relevant data from other routes and returns only relevant data.
   * @param {JSON} crewData data from API.
   * @returns relevant crew data.
   */
  async #createCrewData(crewData) {
    crewData.launches = await this.#fetchNames(
      this.#URL_PATHS.LAUNCH,
      crewData.launches
    );

    return crewData;
  }

  //------------  Dragon  ----------

  /**
   * Fetches all dragon data.
   * @returns Array of all dragon data.
   */
  fetchAllDragonData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.DRAGON;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        return allData.map((dragonData) => this.#createDragonData(dragonData));
      });
  }

  /**
   * Fetches dragon data from API, retrieves relevant data from other routes and returns only relevant data.
   * @param {JSON} dragonData data from API.
   * @returns relevant dragon data.
   */
  #createDragonData(dragonData) {
    return {
      name: dragonData.name,
      type: dragonData.type,
      active: dragonData.active,
      crew_capacity: dragonData.crew_capacity,
      flickr_images: dragonData.flickr_images,
      dry_mass_kg: dragonData.dry_mass_kg,
      dry_mass_lb: dragonData.dry_mass_lb,
      wikipedia: dragonData.wikipedia,
      id: dragonData.id,
    };
  }

  //------------  Launch  ----------

  /**
   * Fetches all launch data.
   * @returns Array of all launch data.
   */
  async fetchAllLaunchData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.LAUNCH;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        allData.reverse();
        const promises = allData.map((launchData) =>
          this.#createLaunchData(launchData)
        );
        return Promise.all(promises);
      });
  }

  /**
   * Fetches launch data from API, retrieves relevant data from other routes and returns only relevant data.
   * @param {JSON} launchData data from API.
   * @returns relevant launch data.
   */
  async #createLaunchData(launchData) {
    const rocketName = await this.#fetchName(
      this.#URL_PATHS.ROCKET,
      launchData.rocket
    );
    const launchPadName = await this.#fetchName(
      this.#URL_PATHS.LAUNCHPAD,
      launchData.launchpad
    );

    return {
      links: launchData.links,
      rocket: rocketName,
      success: launchData.success,
      details: launchData.details,
      name: launchData.name,
      upcoming: launchData.upcoming,
      date_utc: launchData.date_utc,
      launchpad: launchPadName,
      id: launchData.id,
    };
  }

  //------------  Rocket  ----------

  /**
   * Fetches all rocket data.
   * @returns Array of all rocket data.
   */
  fetchAllRocketData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.ROCKET;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        return allData.map((rocketData) => this.#createRocketData(rocketData));
      });
  }

  /**
   * Fetches rocket data from API, retrieves relevant data from other routes and returns only relevant data.
   * @param {JSON} rocketData data from API.
   * @returns relevant rocket data.
   */
  #createRocketData(rocketData) {
    return {
      name: rocketData.name,
      active: rocketData.active,
      flickr_images: rocketData.flickr_images,
      wikipedia: rocketData.wikipedia,
      cost_per_launch: rocketData.cost_per_launch,
      success_rate_pct: rocketData.success_rate_pct,
      description: rocketData.description,
      id: rocketData.id,
    };
  }

  //------------  General  ----------

  /**
   * Fetches a document at the specified path.
   * @param {string} path Path to retrieve document from.
   * @param {string} id ID of document.
   * @returns document in JSON format.
   */
  async fetchById(path, id) {
    const pathURL = `${this.#BASEURL}${path}/${id}`;
    const json = await fetch(pathURL).then((res) => res.json());

    return json;
  }

  /**
   * Fetches name of specified document.
   * @param {string} path Path to retrieve name from.
   * @param {string} id ID of document.
   * @returns Name of document.
   */
  async #fetchName(path, id) {
    const data = await this.fetchById(path, id);

    return data.name;
  }

  /**
   * Fetches multiple names.
   * @param {string} path Path to retrieve names from.
   * @param {string} ids ID of documents.
   * @returns Names of different documents.
   */
  async #fetchNames(path, ids) {
    const names = ids.map(async (id) => {
      return await this.#fetchName(path, id);
    });

    return Promise.all(names);
  }
}

export const spaceXClient = new SpaceXClient();
