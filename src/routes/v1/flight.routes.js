const { FlightController } = require("../../controllers/index");

const express = require("express");

const routerFlight = express.Router();

routerFlight.post("/", FlightController.controllerCreateFlight);

routerFlight.get("/:id", FlightController.controllerGetFlightById);

module.exports = routerFlight;
