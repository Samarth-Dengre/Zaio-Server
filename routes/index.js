const router = require("express").Router();
const scheduleController = require("../controllers/scheduleController");

router.get("/schedule", scheduleController.scheduleHandler);

module.exports = router;
