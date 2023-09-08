// const { Double } = require("bson");
const mongoose = require("mongoose");

const policyProducerDetails = new mongoose.Schema(
  [
    {
      producerCd: {
        type: String,
      },
      producerMobileNo: {
        type: Number,
      },
      producerName: {
        type: String,
      },
      producrAddress: {
        type: String,
      },
      producerOfficeNo: {
        type: String,
      },
      otherOutput1: {
        type: String,
      },
      otherOutput2: {
        type: String,
      },
    },
  ],
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("PolicyProducerDetails", policyProducerDetails);
