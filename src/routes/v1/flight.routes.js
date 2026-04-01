const { FlightController } = require("../../controllers/index");
const { FlightValidate } = require("../../middleware/index");

const express = require("express");

const routeFlights = express.Router();

routeFlights.post(
  "/",
  FlightValidate.validateFlight,
  FlightController.controllerCreateFlight,
);

routeFlights.get("/:id", FlightController.controllerFindFlightById);

routeFlights.get("/", FlightController.controllerGetAllFlights);

module.exports = routeFlights;
