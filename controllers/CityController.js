const { CityService } = require('../services/CityService');

class CityController {
  constructor(cityService) {
    this.cityService = cityService;
  }

  async getAllCities(req, res) {
    try {
      const cities = await this.cityService.getAllCities();
      res.status(200).send(cities);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching cities' });
    }
  }

  async getCityByName(req, res) {
    try {
      const name = req.params.name;
      const city = await this.cityService.getCityByName(name);
      if (city) {
        res.status(200).send(city);
      } else {
        res.status(404).send({ message: `City not found: ${name}` });
      }
    } catch (error) {
      res.status(500).send({ message: `Error fetching city: ${req.params.name}` });
    }
  }

  async createCity(req, res) {
    try {
      const { name, country, population } = req.body;
      const city = await this.cityService.createCity(name, country, population);
      res.status(201).send(city);
    } catch (error) {
      res.status(400).send({ message: 'Error creating city' });
    }
  }

  async updateCity(req, res) {
    try {
      const name = req.params.name;
      const { country, population } = req.body;
      const city = await this.cityService.updateCity(name, country, population);
      res.status(200).send(city);
    } catch (error) {
      res.status(400).send({ message: `Error updating city: ${req.params.name}` });
    }
  }

  async deleteCity(req, res) {
    try {
      const name = req.params.name;
      await this.cityService.deleteCity(name);
      res.status(204).send();
    } catch (error) {
      res.status(400).send({ message: `Error deleting city: ${req.params.name}` });
    }
  }
}

module.exports = { CityController };