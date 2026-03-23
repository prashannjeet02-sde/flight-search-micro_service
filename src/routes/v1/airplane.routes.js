const { AirplaneController } = require("../../controllers/index");

const express = require("express");

const airplaneRouter = express.Router();

airplaneRouter.post("/", AirplaneController.controllerCreateAirplane);

airplaneRouter.post(
  "/bulk",
  AirplaneController.controllerCreateMultipleAirplanes,
);

airplaneRouter.get("/:id", AirplaneController.controllerGetAirplane);

airplaneRouter.get("/", AirplaneController.controllerGetMultipleAirplanes);

airplaneRouter.update("/:id", AirplaneController.controllerUpdateAirplane);

airplaneRouter.delete(
  "/multidel",
  AirplaneController.controllerBulkAirplaneDelete,
);

airplaneRouter.delete("/:id", AirplaneController.controllerDeleteAirplane);

module.exports = airplaneRouter;
