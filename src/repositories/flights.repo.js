const { flights } = require("../models/index");

class FlightRepository {
  async RepoCreateFlight(data) {
    const flight = await flights.create(data);
    return flight;
  }

  async RepoGetFlight(flightId) {
    const getFlight = await flights.findByPk(flightId);
    return getFlight;
  }
}

module.exports = FlightRepository;
