const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./src/Config/config");
const error = require("./src/Middlewares/error");

//middlewares
const aynsMiddleware = require("./src/Middlewares/asyncFunction");

//StartUp
require("./src/StartUp/logging")();
require("./src/StartUp/db")();

require("./src/StartUp/routes")(app);

//Listining to port
app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}...`)
);
