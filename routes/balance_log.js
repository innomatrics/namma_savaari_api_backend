const express = require("express");
const router = express.Router();
const controller = require("../controller/balance_log.js");

router.post("/balance-log", controller.balanceLog);

module.exports = router;