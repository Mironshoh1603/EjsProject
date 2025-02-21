const express = require("express");
const {
  getAllCourses,
  addCourse,
  getCourseById,
  deleteCourse,
  updateCourse,
} = require("../controller/course.controller");
let router = express.Router();

router.route("/").get(getAllCourses).post(addCourse);
router.route("/:id").get(getCourseById).put(updateCourse).delete(deleteCourse);

module.exports = router;

// let { renderFacilities } = require("../controller/facilities.controller.js");

// router.get("/", getFunc);
// router.post("/", postFunc);

// router.get("/:id", getByIdCourse);
// router.put("/:id", updateByIdCourse);
// router.delete("/:id", deleteByIdCourse);
