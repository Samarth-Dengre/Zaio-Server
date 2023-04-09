const TwoHours = require("../models/twoHours");
const FourHours = require("../models/fourHours");
const SixHours = require("../models/sixHours");

// This function is used to get the schedule for a specific hours of study
module.exports.scheduleHandler = async (req, res) => {
  try {
    const { hrs } = req.query;
    if (hrs === "2") {
      const data = await TwoHours.find();
      return res.status(200).json(data);
    } else if (hrs === "4") {
      const data = await FourHours.find();
      return res.status(200).json(data);
    } else if (hrs === "6") {
      const data = await SixHours.find();
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ message: "Bad request" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
