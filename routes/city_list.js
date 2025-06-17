const express = require("express");
const router = express.Router();
const controller = require("../controller/city_list");

router.post("/city-list", controller.cityList);

module.exports = router;