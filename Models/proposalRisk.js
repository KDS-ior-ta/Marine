const mongoose = require("mongoose");

const proposalRiskDetails = new mongoose.Schema(
  [
    {
      memberId: { type: String },
      memberName: { type: String },
      riskSerialNo: { type: String },
      employeeId: { type: String },
      passportNumber: { type: String },
      joiningDate: { type: Date },
      leavingDate: { type: Date },
      memberGender: { type: String },
      memberRelationshp: { type: String },
      memberDob: { type: String },
      memberSi: { type: String },
      memberStatus: { type: String },
      memberOccupation: { type: String },
      nomineeName: { type: String },
      relationship: { type: String },
      allocation: { type: String },
      otherOutput1: { type: String },
      otherOutput2: { type: String },
    },
  ],
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("ProposalRiskDetails", proposalRiskDetails);
