const { FlightService } = require("../services/index");

const flightService = new FlightService();

const controllerCreateFlight = async (req, res) => {
  try {
    const flight = await flightService.serviceCreateFlight(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created flight",
      data: flight,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create flight",
      data: {},
      err: error.message,
    });
  }
};

const controllerGetFlightById = async (req, res) => {
  try {
    const flight = await flightService.serviceGetFlightById(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched flight details",
      data: flight,
      err: {},
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Bad Request",
      data: {},
      err: error.message,
    });
  }
};

module.exports = { controllerCreateFlight, controllerGetFlightById };
