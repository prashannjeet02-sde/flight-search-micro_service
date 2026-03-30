const { FlightController } = require("../../controllers/index");

const express = require("express");

const routeFlights = express.Router();

routeFlights.post("/", FlightController.controllerCreateFlight);

module.exports = routeFlights;
