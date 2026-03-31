const { flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    let filter = {};

    if (data.source) {
      filter.departureAirportId = data.source;
    }

    if (data.destination) {
      filter.arrivalAirportId = data.destination;
    }

    if (data.minPrice || data.maxPrice) {
      filter.price = {};
    }

    if (data.minPrice) {
      filter.price[Op.gte] = Number(data.minPrice);
    }

    if (data.maxPrice) {
      filter.price[Op.lte] = Number(data.maxPrice);
    }
    return filter;
  }

  async CreateFlightRepository(data) {
    const createFlight = await flights.create(data);
    return createFlight;
  }

  async GetFlightByIdRepository(flightId) {
    const findFlight = await flights.findByPk(flightId);
    return findFlight;
  }

  async GetAllFlightsRepository(filterData) {
    const filterOptions = this.#createFilter(filterData);
    const allFlights = await flights.findAll({
      where: filterOptions,
    });
    return allFlights;
  }
}

module.exports = FlightRepository;
