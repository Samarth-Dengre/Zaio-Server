const router = require("express").Router();
const scheduleController = require("../controllers/scheduleController");

// this is the route for the schedule page,
// it will be called when the user clicks on the enroll button and
// it sends the data to the schedule data
router.get("/schedule", scheduleController.scheduleHandler);

module.exports = router;
