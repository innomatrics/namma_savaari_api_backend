const express = require("express");

const router = express.Router();
const controller = require("../controller/book");

router.post("/book", controller.bookBus);

module.exports = router;