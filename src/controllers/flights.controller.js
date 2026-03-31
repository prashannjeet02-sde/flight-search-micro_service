const { FlightServcie } = require("../services/index");

const flightService = new FlightServcie();

const controllerCreateFlight = async (req, res) => {
  try {
    const flight = await flightService.serviceCreateFlight(req.body);
    return res.status(201).json({
      success: true,
      message: "Flight Created",
      data: flight,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create Flight",
      data: {},
      err: error.message,
    });
  }
};

const controllerFindFlightById = async (req, res) => {
  try {
    const flight = await flightService.serviceFlightById(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Flight fetched",
      data: flight,
      err: {},
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Incorrect Information",
      data: {},
      err: error.message,
    });
  }
};

const controllerGetAllFlights = async (req, res) => {
  try {
    const getFlights = await flightService.serviceGetAllFlights(req.query);
    return res.status(200).json({
      success: true,
      message: "List of available flights",
      data: getFlights,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch flights",
      data: {},
      err: error.message,
    });
  }
};

module.exports = {
  controllerCreateFlight,
  controllerFindFlightById,
  controllerGetAllFlights,
};
