class City {
  constructor(name, country, population) {
    this.name = name;
    this.country = country;
    this.population = population;
  }

  // getters
  getName() {
    return this.name;
  }

  getCountry() {
    return this.country;
  }

  getPopulation() {
    return this.population;
  }

  // setters
  setName(name) {
    this.name = name;
  }

  setCountry(country) {
    this.country = country;
  }

  setPopulation(population) {
    this.population = population;
  }
}

module.exports = { City };