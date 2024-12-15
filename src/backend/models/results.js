const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  downloadSpeed: Number,
  uploadSpeed: Number,
  latency: Number,
  timestamp: Date,
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
