"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

//Importing models
const connectDb = require("./config/mongoConnect");

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,DELETE,HEAD,OPTIONS,PATCH,POST,PUT"
  );
  res.setHeader("Access-Control-Allow-Methods", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    console.log("going to options");
    res.status(405);
    res.end();
  } else {
    // Pass to next layer of middleware
    next();
  }
});

const PORT = process.env.PORT;

async function start() {
  try {
    await connectDb;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(error);
  }
}

start();
