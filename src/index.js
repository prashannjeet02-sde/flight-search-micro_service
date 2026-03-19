const express = require("express");
const { PORT } = require("./config/server.config");

const apiRoute = require("./routes/index");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(express.text());

// Routes
app.use("/api", apiRoute);

// Server
app.listen(PORT, () => {
  console.log(`Server is up and listening to PORT:${PORT}`);
});
