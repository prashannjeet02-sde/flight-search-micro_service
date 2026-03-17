const express = require("express");
const { PORT } = require("./config/server.config");
const { City } = require("../src/models/index");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(express.text());

// Server
app.listen(PORT, () => {
  console.log(`Server is up and listening to PORT:${PORT}`);
  console.log("city model:", City);
});
