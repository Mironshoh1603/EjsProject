let courseService = require("../service/course.service");
let responseFunction = require("../utils/response");
let getAllCourses = (req, res, next) => {
  try {
    let courses = courseService.getAllCourses();
    // res.status(200).json({ status: "Succes", data: courses });
    responseFunction(res, courses);
  } catch (error) {
    // res.status(404).json({ status: "Fail", message: error.message });
    console.log(error);

    responseFunction(res);
  }
};

let addCourse = (req, res, next) => {
  try {
    let { name, teacher, teacherImg, image, price, ages, time, capacity } =
      req.body;

    if (!name || !teacher || !time || !capacity)
      throw new Error("Ma'lumot to'liq emas");

    let course = courseService.addCourse({
      name,
      teacher,
      teacherImg,
      image,
      price,
      ages,
      time,
      capacity,
    });

    res.status(201).json({ status: "Succes", data: course });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

let updateCourse = (req, res, next) => {
  try {
    let courseId = req.params.id;
    let body = req.body;
    let course = courseService.updateCourse(courseId, body);
    res.status(203).json({ status: "Succes", data: course });
  } catch (error) {}
};
let deleteCourse = (req, res, next) => {
  try {
  } catch (error) {}
};

let getCourseById = (req, res, next) => {
  try {
    let courseId = req.params.id;
    let data = courseService.getCourse(courseId);
    console.log(courseId);
    res.status(201).json({ status: "Succes", data: data });
  } catch (error) {}
};

module.exports = {
  getAllCourses,
  addCourse,
  getCourseById,
  deleteCourse,
  updateCourse,
};
