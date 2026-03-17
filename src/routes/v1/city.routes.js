const { CityController } = require("../../controllers/index");

const express = require("express");
const cityRouter = express.Router();

cityRouter.get("/", CityController.listOfCity);

cityRouter.post("/", CityController.newCity);

cityRouter.put("/:id", CityController.changeCity);

cityRouter.delete("/:id", CityController.removeCity);

module.exports = cityRouter;
