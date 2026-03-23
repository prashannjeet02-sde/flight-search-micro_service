const { AirplaneRepository } = require("../repositories/index");

class AirplaneService {
  constructor() {
    this.airplaneService = new AirplaneRepository();
  }

  async serviceCreateAirplane(airplaneData) {
    const airplane = await this.airplaneService.createAirplane(airplaneData);
    return airplane;
  }

  async serviceCreateMultipleAirlines(airplanesData) {
    if (!Array.isArray(airplanesData) || airplanesData.length === 0) {
      throw new Error("Airplane section cannot be empty");
    }
    const multiAirplane =
      await this.airplaneService.createMultipleAirplanes(airplanesData);
    return multiAirplane;
  }

  async serviceGetAirplane(airplaneId) {
    const recieveAirplane =
      await this.airplaneService.getAirplaneById(airplaneId);
    return recieveAirplane;
  }

  async serviceGetAllAirplanes() {
    const allAirplanes = await this.airplaneService.getallAirplanes();
    return allAirplanes;
  }

  async serviceDeleteAirplane(airplaneId) {
    const airplane = await this.airplaneService.deleteAirplanes(airplaneId);
    return airplane;
  }

  async serviceMultiDeleteAirplane(airplaneId) {
    const airplanes =
      await this.airplaneService.multiDeleteAirplanes(airplaneId);
    return airplanes;
  }

  async serviceUpdateAirplane(airplaneId, airplaneData) {
    const modify = await this.airplaneService.updateAirplanes(
      airplaneId,
      airplaneData,
    );
    return modify;
  }
}

module.exports = AirplaneService;
