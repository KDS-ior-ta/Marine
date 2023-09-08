const mongoose = require("mongoose");

let policyModel = new mongoose.Schema({
  claimDetails: {
    type: String,
    required: true,
  },
  policyCoInsuranceDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PolicyCoInsuranceDetails",
    required: true,
  },
  proposalDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProposalDetails",
    required: true,
  },
  policyCBCDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PolicyCBCDetails",
    required: true,
  },
  policyProducerDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PolicyProducerDetails",
    required: true,
  },
  proposalCoverDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProposalCoverDetails",
    required: true,
  },
  proposalRiskDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "proposalRiskDetails",
    required: true,
  },
  policyTravelDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PolicyTravelDetails",
    required: true,
  },
  policyRetailDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PolicyRetailDetails",
    required: true,
  },
  policyGroupDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PolicyGroupDetails",
    required: true,
  },
  nomineeDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NomineeDetails",
    required: true,
  },
});

module.exports = mongoose.model("Policy", policyModel);
