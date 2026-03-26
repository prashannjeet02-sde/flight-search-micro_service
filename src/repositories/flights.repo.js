const { flights } = require("../models/index");

class FlightRepository {
  async CreateFlight(data) {
    const newFlight = await flights.create(data);
    return newFlight;
  }
}

module.exports = FlightRepository;
