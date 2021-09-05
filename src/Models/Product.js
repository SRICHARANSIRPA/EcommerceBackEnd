const Joi = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Product = mongoose.model("Products", productSchema);

function validateProduct(product) {
  const schema = {
    title: Joi.string().min(2).max(50).required(),
    Description: Joi.string().min(3).required(),
    image: Joi.string().required(),
    price: Joi.number().min(1).required(),
  };
  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
