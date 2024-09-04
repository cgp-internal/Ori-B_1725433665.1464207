const { City } = require('./../models/City');

class CityRepository {
  constructor(db) {
    this.db = db;
  }

  async getAllCities() {
    const query = `SELECT * FROM cities`;
    const citiesData = await this.db.all(query);
    const cities = citiesData.map((cityData) => new City(cityData.name, cityData.country, cityData.population));
    return cities;
  }

  async getCityByName(name) {
    const query = `SELECT * FROM cities WHERE name = ?`;
    const cityData = await this.db.get(query, name);
    if (cityData) {
      return new City(cityData.name, cityData.country, cityData.population);
    } else {
      return null;
    }
  }

  async createCity(name, country, population) {
    const query = `INSERT INTO cities (name, country, population) VALUES (?, ?, ?)`;
    await this.db.run(query, name, country, population);
    return this.getCityByName(name);
  }

  async updateCity(name, country, population) {
    const query = `UPDATE cities SET country = ?, population = ? WHERE name = ?`;
    await this.db.run(query, country, population, name);
    return this.getCityByName(name);
  }

  async deleteCity(name) {
    const query = `DELETE FROM cities WHERE name = ?`;
    await this.db.run(query, name);
  }
}

module.exports = { CityRepository };