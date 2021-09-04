var cors = require("cors");
const express = require("express");

//routes
const posts = require("../Controllers/ProductController");
const orders = require("../Controllers/OrderController");

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
  app.use("/api/Posts", posts);
  app.use(error);
};

//   app.use("/api/users", users);
//   // console.log("success");
//   app.use("/api/auth", auth);
//   app.use("/api/covidData", covidresults);
// app.use("*", (req, res) => {
//   res.status(404).json({
//     success: "false",
//     message: "Page not found",
//     error: {
//       statusCode: 404,
//       message: "You reached a route that is not defined on this server",
//     },
//   });
// });
