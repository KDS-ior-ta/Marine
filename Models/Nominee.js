const mongoose = require("mongoose");

const nomineeDetails = new mongoose.Schema([{}], {
  timestamps: true,
  strict: false,
});

module.exports = mongoose.model("NomineeDetails", nomineeDetails);
