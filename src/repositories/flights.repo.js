const { flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let options = {};

    if (data.source) {
      options.departureAirportId = data.source;
    }

    if (data.destination) {
      options.arrivalAirportId = data.destination;
    }

    if (data.minPrice || data.maxPrice) {
      options.price = {};

      if (data.minPrice) {
        options.price[Op.gte] = data.minPrice;
      }

      if (data.maxPrice) {
        options.price[Op.lte] = data.maxPrice;
      }
    }
  }

  async RepoCreateFlight(data) {
    const flight = await flights.create(data);
    return flight;
  }

  async RepoGetFlight(flightId) {
    const getFlight = await flights.findByPk(flightId);
    return getFlight;
  }

  async RepoGetAllFlights(filter) {
    const flightFilters = this.#createFilter(filter);
    const allFlights = await flights.findAll({
      where: flightFilters,
    });
    return allFlights;
  }
}

module.exports = FlightRepository;
