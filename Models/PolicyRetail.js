const mongoose = require("mongoose");

const policyRetailDetails = new mongoose.Schema([{}], {
  timestamps: true,
  strict: false,
});

module.exports = mongoose.model("PolicyRetailDetails", policyRetailDetails);
