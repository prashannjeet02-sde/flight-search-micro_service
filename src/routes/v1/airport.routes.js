const { AirportController } = require("../../controllers/index");

const express = require("express");

const airportRoutes = express.Router();

airportRoutes.post("/", AirportController.controllerCreateAirport);

airportRoutes.post("/bulk", AirportController.controllerMultipleAirports);

airportRoutes.get("/:id", AirportController.controllerGetAirport);

airportRoutes.get("/", AirportController.controllerGetAirports);

airportRoutes.put("/:id", AirportController.controllerUpdateAirport);

airportRoutes.delete(
  "/multiple",
  AirportController.controllerBulkAirportDelete,
);

airportRoutes.delete("/:id", AirportController.controllerDeleteAirport);

module.exports = airportRoutes;
