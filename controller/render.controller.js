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
let renderContact = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("contact", { 
    title: "Biz haqimizda",
  });
};

module.exports = { renderIndex, renderAbout };
