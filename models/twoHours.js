const mongoose = require("mongoose");

const twoHours = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  modules: {
    type: Array,
    required: true,
  },
});

const TwoHours = mongoose.model("TwoHours", twoHours);
module.exports = TwoHours;
