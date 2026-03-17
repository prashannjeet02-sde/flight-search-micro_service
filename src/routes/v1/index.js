const cityRouter = require("./city.routes");

const express = require("express");

const v1Routes = express.Router();

v1Routes.use("/city", cityRouter);

module.exports = v1Routes;
