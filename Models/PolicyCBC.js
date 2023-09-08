const mongoose = require("mongoose");

const policyCBCDetails = new mongoose.Schema(
  [
    {
      receiptNumber: { type: String },
      receiptDate: { type: Date },
      collectionMode: { type: String },
      premiumAmount: { type: String },
      collectionStatus: { type: String },
      statusOfPolicy: { type: String },
      instrumentNumber: { type: String },
      drawnOn: { type: String },
      branchName: { type: String },
      dateOfRealization: { type: String },
      additionalDetails: { type: String },
      otherOutput1: { type: String },
      otherOutput2: { type: String },
    },
  ],
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("PolicyCBCDetails", policyCBCDetails);
