const Joi = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
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
const Post = mongoose.model("Post", postSchema);

function validatePost(post) {
  const schema = {
    title: Joi.string().min(2).max(50).required(),
    Description: Joi.string().min(3).required(),
    image: Joi.string().required(),
    price: Joi.number().min(1).required(),
  };
  return Joi.validate(post, schema);
}

exports.Post = Post;
exports.validate = validatePost;
