const express = require("express");

const router = express.Router();
const controller = require("../controller/book");

router.post("/cancel-booking", controller.bookBus);

module.exports = router;