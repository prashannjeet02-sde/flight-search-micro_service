const {
  FlightRepository,
  AirplaneRepository,
} = require("../repositories/index");

class FlightService {
  constructor() {
    this.flightRepo = new FlightRepository();
    this.airplaneRepo = new AirplaneRepository();
  }

  async serviceCreateFlight(data) {
    const seatingCapacity = await this.airplaneRepo.getAirplaneById(
      data.airplaneId,
    );
    const createFlight = await this.flightRepo.RepoCreateFlight({
      ...data,
      totalSeats: seatingCapacity.capacity,
    });
    return createFlight;
  }

  async serviceGetFlightById(flightId) {
    const getFlight = await this.flightRepo.RepoGetFlight(flightId);
    return getFlight;
  }
}

module.exports = FlightService;
