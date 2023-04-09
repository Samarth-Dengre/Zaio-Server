const express = require("express");
const app = express();
const insertDays = require("./data");
const db = require("../config/dbConfig")();

app.listen(3010, () => {
  console.log("Listening on port 3010");
  insertDays.insertTwoHours();
  insertDays.insertFourHours();
  insertDays.insertSixHours();
});
