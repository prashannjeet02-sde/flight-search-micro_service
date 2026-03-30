const { FlightServcie } = require("../services/index");

const flightService = new FlightServcie();

const controllerCreateFlight = async (req, res) => {
  try {
    const flight = await flightService.serviceCreateFlight(req.body);
    return res
      .status(201)
      .json({
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

module.exports = { controllerCreateFlight };
