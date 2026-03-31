const { FlightController } = require("../../controllers/index");

const express = require("express");

const routeFlights = express.Router();

routeFlights.post("/", FlightController.controllerCreateFlight);

routeFlights.get("/:id", FlightController.controllerFindFlightById);

routeFlights.get("/", FlightController.controllerGetAllFlights);

module.exports = routeFlights;
