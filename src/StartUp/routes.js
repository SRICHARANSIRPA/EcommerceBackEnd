var cors = require("cors");
const express = require("express");

//routes
const products = require("../Controllers/ProductController");
const orders = require("../Controllers/OrderController");
const users = require("../Controllers/UserController");
//middlewares
const error = require("../Middlewares/error");

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
};

module.exports = function (app) {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use("/api/Orders", orders);
  app.use("/api/Products", products);
  app.use("/api/Users", users);
  app.use(error);
};
