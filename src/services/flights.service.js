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
    const airplaneData = await this.airplaneRepo.getAirplaneById(
      data.airplaneId,
    );

    const flight = await this.flightRepo.CreateFlightRepository({
      ...data,
      totalSeats: airplaneData.capacity,
    });
    return flight;
  }
}

module.exports = FlightService;
