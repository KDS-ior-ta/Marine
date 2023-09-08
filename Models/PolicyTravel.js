const { Double } = require("bson");
const mongoose = require("mongoose");

const policyTravelDetails = new mongoose.Schema([{}], {
  timestamps: true,
  strict: false,
});

module.exports = mongoose.model("PolicyTravelDetails", policyTravelDetails);
