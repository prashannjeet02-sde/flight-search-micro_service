const { Airports } = require("../models/index");

class AirportRepository {
  async createAirport(airport) {
    const newAirport = await Airports.create(airport);
    return newAirport;
  }

  async createMultipleAirports(airports) {
    const multipleAirports = await Airports.createBulk(airports, {
      validate: true,
    });
    return multipleAirports;
  }

  async getAirport(airportId) {
    const airport = await Airports.findPk(airportId);
    return airport;
  }

  async getAllAirports() {
    const allAirports = await Airports.findAll();
    return allAirports;
  }

  async updateAirport(airportId, data) {
    const airport = await Airports.findPk(airportId);

    if (!airport) {
      return res
        .status(404)
        .json({ success: false, message: "Not Such airport found" });
    }

    ((airport.name = data.name), (airport.address = data.address));

    await airport.save();
    return airport;
  }

  async deleteAirport(airportId) {
    const removeAirport = await Airports.destroy(airportId);
    return removeAirport;
  }
}

module.exports = AirportRepository;
