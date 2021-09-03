var cors = require("cors");
const express = require("express");

//middlewares
const error = require("../Middlewares/error");

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

module.exports = function (app) {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(error);
  //   app.use("/api/users", users);
  //   // console.log("success");
  //   app.use("/api/auth", auth);
  //   app.use("/api/covidData", covidresults);
};
