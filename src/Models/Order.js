const Joi = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  TotalProducts: {
    type: Number,
    min: 1,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  },
  GrandTotal: {
    type: Number,
    required: true,
  },
});
const Order = mongoose.model("Order", orderSchema);

function validateOrder(order) {
  const schema = {
    TotalProducts: Joi.number().min(1).required(),
    UserId: Joi.string().min(3).required(),
    GrandTotal: Joi.number().min(1).required(),
  };
  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validate = validateOrder;
