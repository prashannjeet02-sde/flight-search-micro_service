const cityRouter = require("./city.routes");

const airportRoutes = require("./airport.routes");

const airplaneRoutes = require("./airplane.routes");

const express = require("express");

const v1Routes = express.Router();

v1Routes.use("/city", cityRouter);

v1Routes.use("/airport", airportRoutes);

v1Routes.use("/airplane", airplaneRoutes);

module.exports = v1Routes;
