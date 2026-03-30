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
    const arrival = new Date(data.arrivalTime);
    const departure = new Date(data.departureTime);

    if (arrival < departure) {
      throw new Error("Arrival time cannot be small then Departure time");
    }
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
