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
    title: "Biz haqimizda",
  });
};
let renderError = (req, res, next) => {
  res.render("404");
};

let renderBecomeTeacher = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("about", {
    title: "Ustoz bo'lib ko'ring",
  });
};

let renderTestimonial = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("testimonial", {
    title: "Guvohlik",
  });
};

let renderClasses = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("classes", {
    title: "Bu sinflar",
  });
};

module.exports = {
  renderIndex,
  renderAbout,
  renderBecomeTeacher,
  renderError,
  renderTestimonial,
  renderClasses,
};
