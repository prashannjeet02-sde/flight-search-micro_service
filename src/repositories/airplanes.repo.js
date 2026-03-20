const { Airplane } = require("../models/index");

const { Op } = require("sequelize");

class AirplaneRepository {
  async createAirplane(data) {
    const newAirplane = await Airplane.create({
      company_name: data.company_name,
      model_number: data.model_number,
      capacity: data.capacity,
    });
    return newAirplane;
  }

  async createMultipleAirplanes(airplanes) {
    const multipleAirplane = await Airplane.bulkCreate(airplanes, {
      validate: true,
    });
    return multipleAirplane;
  }

  async getAirplaneById(airplaneId) {
    const getAirplane = await Airplane.findByPk(airplaneId);
    return getAirplane;
  }

  async getallAirplanes() {
    const allAirplane = await Airplane.findAll();
    return allAirplane;
  }

  async updateAirplanes(airplaneId, data) {
    const modifyAirplane = await Airplane.findByPk(airplaneId);
    if (!modifyAirplane) {
      throw new Error("Airplane not found");
    }
    ((modifyAirplane.company_name = data.company_name),
      (modifyAirplane.model_number = data.model_number),
      (modifyAirplane.capacity = data.capacity));

    await modifyAirplane.save();
    return modifyAirplane;
  }

  async deleteAirplanes(airplaneId) {
    const removeAirplane = await Airplane.destroy({
      where: {
        id: airplaneId,
      },
    });
    return removeAirplane;
  }

  async multiDeleteAirplanes(airplaneId) {
    const bulkDeleteAirplane = await Airplane.destroy({
      where: {
        id: {
          [Op.in]: airplaneId,
        },
      },
    });
    return bulkDeleteAirplane;
  }
}

module.exports = AirplaneRepository;
