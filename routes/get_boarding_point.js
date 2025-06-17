const express = require("express");

const router = express.Router();
const controller = require("../controller/cancel_booking.js");

router.post("/cancel-booking", controller.cancelBooking);

module.exports = router;