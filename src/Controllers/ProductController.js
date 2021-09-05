const { Product, validate } = require("../Models/Product");
const asyncfunction = require("../Middlewares/asyncFunction");
const isValidObjectId = require("../Middlewares/ValidObjectChecker");
const express = require("express");
const router = express.Router();

router.get(
  "/",
  asyncfunction(async (req, res) => {
    console.log("product Controller");
    const products = await Product.find().sort("Id");
    console.log(products);
    res.send(products);
  })
);

router.get(
  "/:Id",
  [isValidObjectId],
  asyncfunction(async (req, res) => {
    const product = await Product.findById(req.params.Id);
    if (!product)
      return res
        .status(404)
        .send("The Product with the given ID was not found.");
    res.send(product);
  })
);

module.exports = router;
