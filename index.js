const express = require("express");
const app = express();
const db = require("./config/dbConfig")();
const cors = require("cors");
require("dotenv").config();

// using the required middlewares
app.use(cors());
// parsing the body of the request
app.use(express.json());
// parsing the urlencoded data
app.use(express.urlencoded({ extended: true }));
// using the routes
app.use("/", require("./routes"));

// listening to the port and starting the server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
