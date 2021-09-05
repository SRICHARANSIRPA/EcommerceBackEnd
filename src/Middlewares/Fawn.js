const Fawn = require("fawn");
const mongoose = require("mongoose");

const { ConnectionString } = require("../Config/config");
Fawn.init(`mongodb://${ConnectionString}`);

module.exports = Fawn;
