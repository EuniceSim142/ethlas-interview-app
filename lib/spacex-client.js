class SpaceXClient {
  #BASEURL = "https://api.spacexdata.com";
  #URL_PATHS = {
    CREW: "/v4/crew",
    LAUNCH: "/v5/launches",
    DRAGON: "/v4/dragons",
    ROCKET: "/v4/rockets",

    LAUNCHPAD: "/v4/launchpads",
  };

  #QUERY = "/query";

  constructor() {}

  //------------  Crew  ----------

  //------------  Dragon  ----------

  fetchAllDragonData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.DRAGON;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        return allData.map((dragonData) => this.#createDragonData(dragonData));
      });
  }

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
   * Fetches all launch data
   * @returns Array of all launch data
   */
  async fetchAllLaunchData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.LAUNCH;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        const promises = allData.map((launchData) =>
          this.#createLaunchData(launchData)
        );
        return Promise.all(promises);
      });
  }

  /**
   * Fetches launch data from API, retrieves relevant data from other routes and returns only relevant data
   * @param {JSON} launchData data from API
   * @returns relevant launch data
   */
  async #createLaunchData(launchData) {
    const rocketName = await this.fetchName(
      this.#URL_PATHS.ROCKET,
      launchData.rocket
    );
    const launchPadName = await this.fetchName(
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

  fetchAllRocketData() {
    const pathURL = this.#BASEURL + this.#URL_PATHS.ROCKET;

    return fetch(pathURL)
      .then((res) => res.json())
      .then((allData) => {
        return allData.map((rocketData) => this.#createRocketData(rocketData));
      });
  }

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
   * Fetches a document at the specified path
   * @param {string} path Path to retrieve document from
   * @param {string} id ID of document
   * @returns
   */
  async fetchById(path, id) {
    const pathURL = `${this.#BASEURL}${path}/${id}`;
    const json = await fetch(pathURL).then((res) => res.json());

    return json;
  }

  /**
   * Fetches name of specified document
   * @param {string} path Path to retrieve name from
   * @param {string} id ID of document
   * @returns
   */
  async fetchName(path, id) {
    const data = await this.fetchById(path, id);

    return data.name;
  }

  async query(path, query = {}) {
    const pathURL = `${BASEURL}${path}${QUERY}`;
    const response = await fetch(pathURL).then((res) => res.json());
    return response;
  }
}

export const spaceXClient = new SpaceXClient();
