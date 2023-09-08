const mongoose = require("mongoose");

async function connectDb() {
  let connection = mongoose.connect(process.env.MONGO_URL);
  // console.log(connection);
  return connection;
}

// async function connectDb2() {
//   let connection = mongoose.connect(process.env.MONGO_URL2);
//   return connection;
// }
module.exports = connectDb; //, connectDb2 };
