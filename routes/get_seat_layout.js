const express = require("express");

const router = express.Router();
const controller = require("../controller/get_seat_layout.js");

router.post("/get-seat-layout", controller.getSeatLayout);

module.exports = router;