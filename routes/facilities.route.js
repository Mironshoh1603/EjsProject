const express = require("express");
let router = express.Router();
let { renderFacilities } = require('../controller/facilities.controller.js')


router.get('/facility', renderFacilities)

module.exports = router