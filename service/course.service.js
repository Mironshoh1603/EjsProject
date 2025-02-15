const fs = require("fs");

let getAllCourses = () => {
  let courses = JSON.parse(fs.readFileSync("./config/courses.json", "utf8"));
  return courses;
};

module.exports = { getAllCourses };
