const { Order, validate } = require("../models/Order");
const asyncfunction = require("../Middlewares/asyncFunction");
const express = require("express");
const router = express.Router();

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

    let order = new Order({
      TotalProducts: req.body.TotalProducts,
      UserId: req.body.UserId,
      GrandTotal: req.body.UserId,
    });
    order = await order.save();

    res.send(order);
  })
);

router.get(
  "/:Id",
  asyncfunction(async (req, res) => {
    console.log(req.params.Id);
    const order = await Order.findById(req.params.Id);
    if (!order)
      return res.status(404).send("The Oder with the given ID was not found.");

    res.send(order);
  })
);
module.exports = router;
