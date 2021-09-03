const mongoose = require("mongoose");
const logger = require("../Middlewares/winston");
const config = require("../Config/config");

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

module.exports = function () {
  //   mongoose.connect(config.connectionUrl, options).then(() => {
  //     logger.info("Connected to MongoDB...");
  //   });
};
