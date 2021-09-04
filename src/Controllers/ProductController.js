const { Post, validate } = require("../models/Post");
const asyncfunction = require("../Middlewares/asyncFunction");
const express = require("express");
const router = express.Router();

router.get(
  "/",
  asyncfunction(async (req, res) => {
    console.log("product Controller");
    const posts = await Post.find().sort("Id");
    res.send(posts);
  })
);

router.get(
  "/:Id",
  asyncfunction(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post)
      return res.status(404).send("The Post with the given ID was not found.");

    res.send(post);
  })
);

module.exports = router;
