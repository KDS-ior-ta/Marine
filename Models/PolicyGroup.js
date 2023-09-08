const mongoose = require("mongoose");

const policyGroupDetails = new mongoose.Schema([{}], {
  timestamps: true,
  strict: false,
});

module.exports = mongoose.model("PolicyGroupDetails", policyGroupDetails);
