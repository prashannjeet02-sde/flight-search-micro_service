const { AirplaneService } = require("../services/index");

const serviceAirplane = new AirplaneService();

const controllerCreateAirplane = async (req, res) => {
  try {
    const { company_name, model_number, capacity } = req.body;
    if (!company_name || !model_number || !capacity) {
      return res.status(400).json({
        success: false,
        message: "Missing Field is Required",
        data: {},
        err: "Validation Error",
      });
    }
    const airplaneData = { company_name, model_number, capacity };
    const airplane = await serviceAirplane.serviceCreateAirplane(airplaneData);
    return res.status(201).json({
      success: true,
      message: "Airplane Created",
      data: airplane,
      err: {},
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Something went wrong",
      data: {},
      err: error.message,
    });
  }
};

const controllerCreateMultipleAirplanes = async (req, res) => {
  try {
    const multipleAirplanes =
      await serviceAirplane.serviceCreateMultipleAirlines(req.body);
    return res.status(201).json({
      success: true,
      message: "Airplane created",
      data: multipleAirplanes,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
      err: error.message,
    });
  }
};

const controllerGetAirplane = async (req, res) => {
  try {
    const airplaneId = req.params.id;
    const fetchAirplane = await serviceAirplane.serviceGetAirplane(airplaneId);
    return res.status(200).json({
      success: true,
      message: `Airplane with id:${airplaneId} fetched`,
      data: fetchAirplane,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch result",
      data: {},
      err: error.message,
    });
  }
};

const controllerGetMultipleAirplanes = async (req, res) => {
  try {
    const airplanes = await serviceAirplane.serviceGetAllAirplanes();
    return res.status(200).json({
      success: true,
      message: "Airplanes Created",
      data: airplanes,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate Airplanes",
      data: {},
      err: error.message,
    });
  }
};

const controllerUpdateAirplane = async (req, res) => {
  try {
    const airplaneId = req.params.id;
    const airplaneData = req.body;
    const modify = await serviceAirplane.serviceUpdateAirplane(
      airplaneId,
      airplaneData,
    );
    return res.status(200).json({
      success: true,
      message: "Airplane updated successfully",
      data: modify,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update",
      data: {},
      err: error.message,
    });
  }
};

const controllerDeleteAirplane = async (req, res) => {
  try {
    const airplaneId = req.params.id;
    const remove = await serviceAirplane.serviceDeleteAirplane(airplaneId);
    return res.status(200).json({
      success: false,
      message: "Deletion Successful",
      data: {},
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete",
      data: {},
      err: error.message,
    });
  }
};

const controllerBulkAirplaneDelete = async (req, res) => {
  try {
    const airplaneId = req.params.id;
    const remove = await serviceAirplane.serviceMultiDeleteAirplane(airplaneId);
    return res
      .status(200)
      .json({ success: true, message: "Airplanes deleted", data: {}, err: {} });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
      err: error.message,
    });
  }
};

module.exports = {
  controllerCreateAirplane,
  controllerCreateMultipleAirplanes,
  controllerGetAirplane,
  controllerGetMultipleAirplanes,
  controllerUpdateAirplane,
  controllerDeleteAirplane,
  controllerBulkAirplaneDelete,
};
