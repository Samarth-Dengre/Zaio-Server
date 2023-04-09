const express = require("express");
const app = express();
const db = require("./config/dbConfig")();
const cors = require("cors");
require("dotenv").config();

// using the required middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
