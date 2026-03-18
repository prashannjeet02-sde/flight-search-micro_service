const { CityRepository } = require("../repositories/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const deleted = await this.cityRepository.deleteCity(cityId);
      return deleted;
    } catch (error) {
      console.log("Error while deleting city in service layer");
      throw error;
    }
  }

  async allCity(filter) {
    const cities = await this.cityRepository.getAllCity({
      city_name: filter.city_name,
    });
    return cities;
  }

  async fetchCity(cityId) {
    try {
      const fetchCity = await this.cityRepository.getCity(cityId);
      if (!fetchCity) {
        throw new Error("City not found");
      }
      return fetchCity;
    } catch (error) {
      console.log("Error in service layer while fetching city");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const modifyCity = await this.cityRepository.updateCity(cityId, data);
      return modifyCity;
    } catch (error) {
      console.log("Failed to update city.Error in service layer");
      throw error;
    }
  }
}

module.exports = CityService;
