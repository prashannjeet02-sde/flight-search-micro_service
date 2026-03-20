const { Op } = require("sequelize");
const { Airports, City } = require("../models/index");

class AirportRepository {
  async createAirport(airport) {
    const newAirport = await Airports.create(airport);
    return newAirport;
  }

  async createMultipleAirports(airports) {
    const multipleAirports = await Airports.bulkCreate(airports, {
      validate: true,
    });
    return multipleAirports;
  }

  async getAirport(airportId) {
    const airport = await Airports.findByPk(airportId);
    return airport;
  }

  async getAllAirports() {
    const allAirports = await Airports.findAll({
      include: [
        {
          model: City,
          as: "city",
          attributes: ["city_name"],
        },
      ],
    });
    return allAirports;
  }

  async updateAirport(airportId, data) {
    const airport = await Airports.findByPk(airportId);

    if (!airport) {
      throw new Error("Airport not found");
    }

    ((airport.name = data.name),
      (airport.address = data.address),
      (airport.city_id = data.city_id));

    await airport.save();
    return airport;
  }

  async deleteAirport(airportId) {
    const removeAirport = await Airports.destroy({
      where: {
        id: airportId,
      },
    });
    return removeAirport;
  }

  async bulkAirportDelete(airportIds) {
    const bulkDelete = await Airports.destroy({
      where: {
        id: {
          [Op.in]: airportIds,
        },
      },
    });
    return bulkDelete;
  }
}

module.exports = AirportRepository;
