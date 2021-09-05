const winston = require("winston");
require("winston-mongodb");
const config = require("../Config/config");
options = [
  new winston.transports.File({ filename: "logfile.log" }),
  new winston.transports.MongoDB({
    db: config.ConnectionString,
    options: {
      poolSize: 2,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  }),
];
const logger = winston.createLogger({
  transports: options,
  exceptionHandlers: [
    new winston.transports.File({ filename: "unCaughtExpections.log" }),
  ],
});

//singleton
module.exports = logger;
