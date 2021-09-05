const { Order, validate } = require("../models/Order");
const asyncfunction = require("../Middlewares/asyncFunction");
const express = require("express");
const router = express.Router();
const isValidObjectId = require("../Middlewares/ValidObjectChecker");
const Fawn = require("../Middlewares/Fawn");
const _ = require("lodash");
router.get(
  "/",
  asyncfunction(async (req, res) => {
    console.log("Order Controller");
    const orders = await Order.find().sort("name");
    res.send(orders);
  })
);

router.post(
  "/",
  asyncfunction(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let order = new Order(
      _.pick(req.body, ["TotalProducts", "UserId", "GrandTotal"])
    );

    order = await order.save();
    res.send(_.pick(order, ["TotalProducts", "UserId", "GrandTotal", "_id"]));
  })
);

router.get(
  "/:Id",
  [isValidObjectId],
  asyncfunction(async (req, res) => {
    const order = await Order.findById(req.params.Id);
    if (!order)
      return res.status(404).send("The Oder with the given ID was not found.");

    res.send(_.pick(order, ["TotalProducts", "UserId", "GrandTotal", "_id"]));
  })
);
module.exports = router;
