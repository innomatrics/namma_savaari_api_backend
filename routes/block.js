const express = require('express');

const router = express.Router();
const controller = require('../controller/block');

router.post("/block", controller.block);

module.exports = router;