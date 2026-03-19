const { AirportRepository } = require("../repositories/index");

class AirportService {
  constructor() {
    this.airportRepo = new AirportRepository();
  }

  async serviceCreateAirport(data) {
    const airport = await this.airportRepo.createAirport(data);
    return airport;
  }

  async serviceCreateBulkAirport(airport) {
    if (!Array.isArray(airport) || airport.length === 0) {
      throw new Error("Airport list must be non-empty ");
    }
    const bulkAirport = await this.airportRepo.createMultipleAirports(data);
    return bulkAirport;
  }

  async serviceGetAirport(id) {
    const getAirport = await this.airportRepo.getAirport(id);
    return getAirport;
  }

  async serviceGetAllAirports() {
    const getAllAirport = await this.airportRepo.getAllAirports();
    return getAllAirport;
  }

  async serviceUpdateAirport(airportId, data) {
    const updatePort = await this.airportRepo.updateAirport(airportId, data);
    return updatePort;
  }

  async serviceDeleteAirport(airportId) {
    const deletePort = await this.airportRepo.deleteAirport(airportId);
    return deletePort;
  }
}

module.exports = AirportService;
