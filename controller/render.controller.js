let courseService = require("../service/course.service");
let renderIndex = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("index", {
    courses: data,
    title: "o'quv kurslari bog'chasi",
    join: "Bizga qo'shiling",
  });
};
let renderAbout = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("about", {
    title: "tayinlash",
  });
};
let Appointmen = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("appointment", {
    title: "tayinlash",
  });
};
let renderTestimonial = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("testimonial", {
    title: "Guvohlik",
  });
};

module.exports = { renderIndex, renderAbout, Appointmen };
