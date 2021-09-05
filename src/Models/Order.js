const Joi = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
  // ProductsOdered: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   required: true,
  // },
});
const Order = mongoose.model("Orders", orderSchema);

function validateOrder(order) {
  const schema = {
    TotalProducts: Joi.number().min(1).required(),
    UserId: Joi.string().min(3).required(),
    GrandTotal: Joi.number().min(1).required(),
    // ProductsOdered: Joi.array().items(
    //   Joi.object(
    //     // Object schema
    //     [mongoose.Schema.Types.ObjectId]
    //   )
    // ),
  };
  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validate = validateOrder;
