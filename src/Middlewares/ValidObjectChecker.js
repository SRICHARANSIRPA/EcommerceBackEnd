const ObjectID = require("mongodb").ObjectId;

module.exports = function (req, res, next) {
  if (!ObjectID.isValid(req.params.Id)) {
    return res.status(403).send("Invalid Product Id");
  }
  next();
};
