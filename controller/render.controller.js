let courseService = require("../service/course.service");
let teacherService = require("../service/techer.service");
let renderIndex = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("index", {
    courses: data,
    title: "o'quv kurslari bog'chasi",
    join: "Bizga qo'shiling",
  });
};

let renderAbout = (req, res, next) => {
  let teachers = teacherService.getAllTeachers();
  console.log(teachers);

  res.render("about", {
    title: "Haqida",
    teachers,
  });
};
let renderError = (req, res, next) => {
  res.render("404");
};
let renderContact = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("contact", {
    title: "Biz haqimizda",
  });
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

let renderTeam = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("team", {
    title: "Ustozlar",
  });
};

let Appointmen = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("appointment", {
    title: "tayinlash",
  });
};

module.exports = {
  renderIndex,
  renderAbout,
  renderBecomeTeacher,
  renderError,
  renderTestimonial,
  renderClasses,
  renderTeam,
  renderContact,
  Appointmen,
};
