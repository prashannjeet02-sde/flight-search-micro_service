const { CityController } = require("../../controllers/index");

const express = require("express");
const cityRouter = express.Router();

cityRouter.get("/:id", CityController.listOfCity);

cityRouter.get("/", CityController.listOfAllCity);

cityRouter.post("/", CityController.newCity);

cityRouter.post("/bulk", CityController.multipleCities);

cityRouter.put("/:id", CityController.changeCity);

cityRouter.delete("/:id", CityController.removeCity);

module.exports = cityRouter;
