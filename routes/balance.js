const express = require('express');

const router = express.Router();
const controller = require('../controller/balance');

router.post("/balance", controller.balance);

module.exports = router;