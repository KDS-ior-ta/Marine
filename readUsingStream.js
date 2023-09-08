// });
const { MongoClient } = require("mongodb");
const dBName = "travel-uat";
const url =
  "mongodb+srv://kds1997:bhagat12345@nodeexpressprojects.zay5ivp.mongodb.net/travel-uat?retryWrites=true&w=majority";

const client = new MongoClient(url);
async function das() {
  const result = await client.connect();
  //   console.log(client);
  // let result = das();
  db = result.db(dBName);
  let collection = db.collection("policy");
  let startTime = Date.now();
  let counter = 0;
  const stream = await collection.find({}).toArray();
  console.log("Hii");
  stream.on("data", () => {
    counter = counter + 1;
  });

  stream.on("end", () => {
    const totalTime = (Date.now() - startTime) / 1000;
    console.log(
      `Total time taken: ${totalTime} seconds`,
      `counter = ${counter}`
    );
  });
}

das();
