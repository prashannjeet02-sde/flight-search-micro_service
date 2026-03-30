const { flights } = require("../models/index");

class FlightRepository {
  async CreateFlightRepository(data) {
    const createFlight = await flights.create(data);
    return createFlight;
  }
}

module.exports = FlightRepository;
