const ObjectID = require("mongodb").ObjectId;

module.exports = function (req, res, next) {
  if (!ObjectID.isValid(req.params.Id)) {
    return res.status(400).send("Invalid Product Id");
  }
  next();
};
