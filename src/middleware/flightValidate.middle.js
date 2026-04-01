const validateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(400).json({
      success: false,
      message: "Bad Request!Mandatory fields are missing",
    });
  }
  next();
};

module.exports = { validateFlight };
