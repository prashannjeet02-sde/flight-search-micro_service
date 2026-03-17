const { City } = require("../models/index");

class CityRepository {
  async createCity({ city_name }) {
    try {
      const newCity = await City.create({
        city_name,
      });
      return newCity;
    } catch (error) {
      console.log(
        "Something went wrong while creating city in city Repository layer",
      );
      throw error;
    }
  }

  async getCity(id) {
    try {
      const findCity = await City.findByPk(id);
      return findCity;
    } catch (error) {
      console.log("Something went wrong in find city");
      throw error;
    }
  }

  async deleteCity(id) {
    try {
      const deleted = await City.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("Cannot delete city:Error in repo layer");
      throw error;
    }
  }

  async updateCity(id, data) {
    try {
      await City.update(data, {
        where: {
          id: id,
        },
      });
      const updateCity = await City.findByPk(id);
      return updateCity;
    } catch (error) {
      console.log("Something went wrong while update");
      throw error;
    }
  }
}

module.exports = CityRepository;
