const mongoose = require("mongoose");

const sixHours = new mongoose.Schema({
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

const SixHours = mongoose.model("SixHours", sixHours);
module.exports = SixHours;
