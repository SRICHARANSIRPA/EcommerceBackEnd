const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./src/Config/config");
const error = require("./src/Middlewares/error");

//StartUp
require("./src/StartUp/logging")();
require("./src/StartUp/db")();
require("./src/StartUp/routes")(app);

//simple test method
app.get("/", (req, res) => {
  console.log(config);
  res.status(200).send(config);
});
app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}...`)
);
