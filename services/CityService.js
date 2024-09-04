const { CityRepository } = require('./../repositories/CityRepository');

class CityService {
  constructor(cityRepository) {
    this.cityRepository = cityRepository;
  }

  async getAllCities() {
    return await this.cityRepository.getAllCities();
  }

  async getCityByName(name) {
    return await this.cityRepository.getCityByName(name);
  }

  async createCity(name, country, population) {
    return await this.cityRepository.createCity(name, country, population);
  }

  async updateCity(name, country, population) {
    return await this.cityRepository.updateCity(name, country, population);
  }

  async deleteCity(name) {
    return await this.cityRepository.deleteCity(name);
  }
}

module.exports = { CityService };