const mongoose = require("mongoose");
require("dotenv").config();

// Connect to database
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

module.exports = connect;
