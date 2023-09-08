const mongoose = require("mongoose");

const policyCoInsuranceDetails = new mongoose.Schema([{}], {
  timestamps: true,
  strict: false,
});

module.exports = mongoose.model(
  "PolicyCoInsuranceDetails",
  policyCoInsuranceDetails
);
