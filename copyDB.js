const Nominee = require("./Models/Nominee");
const Policy = require("./Models/Policy");
const PolicyCBC = require("./Models/PolicyCBC");
const PolicyCoInsurance = require("./Models/PolicyCoInsurance");
const PolicyGroup = require("./Models/PolicyGroup");
const PolicyProducer = require("./Models/PolicyProducer");
const PolicyRetail = require("./Models/PolicyRetail");
const PolicyTravel = require("./Models/PolicyTravel");
const ProposalRisk = require("./Models/proposalRisk");
const Proposal = require("./Models/Proposal");
const ProposalCover = require("./Models/proposalCover");
const connectDb = require("./config/mongoConnect");
require("dotenv").config();

async function start() {
  try {
    // await connectDb;
    const temp = await connectDb();
    // console.log({ ...temp });
    //   app.listen(PORT, () => {
    //     console.log(`Server is running on port ${PORT}`);
    //   });
  } catch (err) {
    console.log(err);
  }
}
start();
const { MongoClient } = require("mongodb");
const dBname = "travel-uat";
const url =
  "mongodb+srv://kds1997:bhagat12345@nodeexpressprojects.zay5ivp.mongodb.net/travel-uat?retryWrites=true&w=majority";
// console.log(url);
const client = new MongoClient(url);

const dBname1 = "travel_local";
const url1 =
  "mongodb+srv://kds1997:bhagat12345@nodeexpressprojects.zay5ivp.mongodb.net/travel_local?retryWrites=true&w=majority";
// console.log(url);
const client1 = new MongoClient(url1);

async function getData() {
  let result = await client.connect();
  db = result.db(dBname);
  collection = db.collection("policy");
  let data = await collection.find({}).limit(5).toArray();
  //   console.log(data.length"], data[0item[]);
  let d = [];
  d.push(data[0]);
  //   d.push(data[1]);
  return d;
}

async function copyData() {
  let data; // = await getData()
  data = await getData();
  data.map((item) => {
    // console.log(item);
    let policyPL = item["claimNumber"];
    console.log(policyPL);
  });
}

async function copyProposalDetails() {
  let data;
  // console.log(await client1.connect());
  // console.log("----------------------------------");
  //   console.log(await client.connect());
  // console.log("----------------------------------");
  let result = await client1.connect();

  db = result.db(dBname1);

  // console.log(db);

  console.log("----------------------------------");
  console.log({ ...Proposal });
  //   collection = db.collection("policy");
  data = await getData();
  console.log(await Proposal.find({}));
  data.map(async (item) => {
    // console.log(item["proposalDetail"]);
    const temp = item.proposalDetail;
    console.log(temp[0]);
    let result = await Proposal.create({
      //   item['proposalDetail']["masterPolicy"],
      //   item['proposalDetail']["masterPolicyNumber"],
      //   item['proposalDetail']["masterPolicyHolderName"],
      //   item['proposalDetail']["masterPolicyStartDt"],
      //   item['proposalDetail']["masterPolicyEndDt"],
      //   item['proposalDetail']["groupCategory"],
      //   item['proposalDetail']["proposalNo"],
      //   item['proposalDetail']["proposalStatus"],
      //   item['proposalDetail']["policyStatus"],
      //   item['proposalDetail']["policyType"],
      //   item['proposalDetail']["wattsPolNo"],
      //   item['proposalDetail']["policyNo"],
      //   item['proposalDetail']["certificateTyp"],
      //   item['proposalDetail']["certificateNo"],
      //   item['proposalDetail']["officeCode"],
      //   item['proposalDetail']["priorityCustomer"],
      //   item['proposalDetail']["insuredId"],
      //   item['proposalDetail']["insuredName"],
      //   item['proposalDetail']["txtAddressLine1"],
      //   item['proposalDetail']["insuredMail"],
      //   item['proposalDetail']["insuredDob"],
      //   item['proposalDetail']["insuredGender"],
      //   item['proposalDetail']["majorLineCd"],
      //   item['proposalDetail']["cardType"],
      //   item['proposalDetail']["cardInsurer"],
      //   item['proposalDetail']["periodOfInsurance"],
      //   item['proposalDetail']["productName"],
      //   item['proposalDetail']["currencyType"],
      //   item['proposalDetail']["minorLine"],
      //   item['proposalDetail']["policyIssuingDt"],
      //   item['proposalDetail']["cardCategory"],
      //   item['proposalDetail']["customerAddressLine1"],
      //   item['proposalDetail']["customerAddressLine2"],
      //   item['proposalDetail']["customerAddressLine3"],
      //   item['proposalDetail']["customerArea"],
      //   item['proposalDetail']["customerLandmark"],
      //   item['proposalDetail']["customerCountry"],
      //   item['proposalDetail']["customerState"],
      //   item['proposalDetail']["customerDistrict"],
      //   item['proposalDetail']["customerCityTehshiTaluka"],
      //   item['proposalDetail']["customerPincodePostOffice"],
      //   item['proposalDetail']["customerPrimaryPhone"],
      //   item['proposalDetail']["customerAlternatePhone"],
      //   item['proposalDetail']["customerMobile"],
      //   item['proposalDetail']["customerEmail"],
      //   item['proposalDetail']["bankName"],
      //   item['proposalDetail']["bankBranchName"],
      //   item['proposalDetail']["bankACNo"],
      //   item['proposalDetail']["nameAsInBankAccount"],
      //   item['proposalDetail']["micrCode"],
      //   item['proposalDetail']["ifscCode"],
      //   item['proposalDetail']["tpaName"],
      //   item['proposalDetail']["tpaCode"],
      // item.proposalDetail
      proposalDetail: temp[0],
    });
    if (result) {
      console.log(result);
    }
  });
}

async function copyNomineeDetails() {
  let data;
  // console.log(await client1.connect());
  // console.log("----------------------------------");
  //   console.log(await client.connect());
  // console.log("----------------------------------");
  // let result = await client1.connect();
  // // console.log(result);
  // db = result.db(dBname1);

  // // console.log(db);
  // collection = db.collection("nomineedetails");
  // let data1 = await collection.find({}).limit(1).toArray();
  // // console.log(data1);
  // console.log("----------------------------------");
  // // console.log({ ...Nominee });
  // //   collection = db.collection("policy");
  data = await getData();
  // console.log(await PolicyGroup.find({}));
  
    const temp = item.nomineeDetails;
    // console.log(temp[0]);
    let result = await Nominee.create([
      {
        ...temp[0],
      },
    ]);
    if (result) {
      console.log(result);
    }
  });
}
// copyData();
// copyProposalDetails();
copyNomineeDetails();

// getData();
