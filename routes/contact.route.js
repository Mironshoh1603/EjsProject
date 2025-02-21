const express = require("express");
const { addContact } = require("../controller/contact.controller");

let router = express.Router();

router.route("/").post(addContact);

module.exports = router;

// let { renderFacilities } = require("../controller/facilities.controller.js");

// router.get("/", getFunc);
// router.post("/", postFunc);

// router.get("/:id", getByIdCourse);
// router.put("/:id", updateByIdCourse);
// router.delete("/:id", deleteByIdCourse);
