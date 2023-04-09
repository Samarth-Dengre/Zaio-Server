const mongoose = require("mongoose");

const fourHours = new mongoose.Schema({
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

const FourHours = mongoose.model("FourHours", fourHours);
module.exports = FourHours;
