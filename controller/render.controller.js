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

let renderTeam = (req, res, next) => {
  let data = courseService.getAllCourses();
  res.render("team", {
    title: "Ustozlar",
  });
};

module.exports = { renderIndex, renderAbout, renderTeam };
