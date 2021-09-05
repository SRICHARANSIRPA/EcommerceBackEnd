const mongoose = require("mongoose");
const logger = require("../Middlewares/winston");
const config = require("../Config/config");

// const options = {
//   serverSelectionTimeoutMS: 5000,
//   socketTimeoutMS: 45000,
//   // useFindAndModify: false,
//   // useCreateIndex: true,
// };

mongoose.connection.on("error", (err) => {
  logger.error({ message: "failed to Connect to MongoDB...", error: err });
  console.log({ message: "failed to Connect to MongoDB...", error: err });
});

module.exports = async function () {
  console.log(config.ConnectionString);
  console.log("Hello World");
  mongoose.connect(config.ConnectionString, () => {
    logger.info("Connected to MongoDB...");
    console.log("Connected to MongoDB...");
  });
};
