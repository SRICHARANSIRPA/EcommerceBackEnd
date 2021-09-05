const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  UID: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model("Users", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    UID: Joi.string().required(),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
