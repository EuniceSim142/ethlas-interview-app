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
