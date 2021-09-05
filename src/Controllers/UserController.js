const express = require("express");
const router = express.Router();
const { User, validate } = require("../Models/User");
const _ = require("lodash");
const asyncfunction = require("../Middlewares/asyncFunction");
const Fawn = require("../Middlewares/Fawn");
router.post(
  "/",
  asyncfunction(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(200).send(user);
    }

    user = new User(_.pick(req.body, ["name", "email", "UID"]));

    user = await user.save();
    res.status(200).send(_.pick(user, ["_id", "name", "email"]));
  })
);

router.get("/", async (req, res) => {
  console.log(req);
  const user = await User.find().sort("Id");
  console.log(user);
  res.send(user);
});

module.exports = router;
