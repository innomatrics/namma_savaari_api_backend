const express = require("express");

const router = express.Router();
const controller = require("../controller/get_boarding_point");

router.post("/get-boarding-point", controller.getBoardingPointDetails);

module.exports = router;