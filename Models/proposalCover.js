const { Double } = require("bson");
const mongoose = require("mongoose");

const proposalCoverDetails = new mongoose.Schema(
  [
    {
      coverStartDt: { type: Date },
      coverEndDt: { type: Date },
      departureDate: { type: Date },
      returnDate: { type: Date },
      inceptionEnrollDt: { type: Date },
      expiryDate: { type: Date },
      riskStrtDtJoining: { type: Date },
      riskEndDt: { type: Date },
      coverName: { type: String },
      coverSi: { type: String },
      coverLimit: { type: String },
      coverGroupIndex: { type: String },
      coverGroupName: { type: String },
      riskSerialNumber: { type: String },
      perilName: { type: String },
      diffenertialSi: { type: String },
      deductible: { type: String },
      coverCode: { type: String },
      otherOutput1: { type: String },
      otherOutput2: { type: String },
    },
  ],
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("ProposalCoverDetails", proposalCoverDetails);
