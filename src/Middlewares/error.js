const logger = require("./winston");
module.exports = function (err, req, res, next) {
  console.log("Global Error");
  logger.error(err.message, { metadata: err });
  res.status(500).send({ success: false, message: "Something Failed" });
};
