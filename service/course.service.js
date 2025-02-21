const fs = require("fs");
const uuid = require("uuid");

let getAllCourses = () => {
  let courses = JSON.parse(fs.readFileSync("./config/courses.json", "utf8"));
  return courses;
};

let addCourse = (data) => {
  let courses = getAllCourses();
  data.id = uuid.v4();
  data.price = data.price ? data.price : 0;
  courses.push(data);
  fs.writeFileSync("./config/courses.json", JSON.stringify(courses), "utf8");
  return data;
};

let getCourse = (id) => {
  let course;
  let courses = getAllCourses();
  for (const i of courses) {
    if (i.id == id) course = i;
  }
  // console.log(course);
  return course;
};

let updateCourse = (id, data) => {
  let course = getCourse(id);
  // course.price = data.price;
  Object.assign(course, data);
  let courses = getAllCourses();
  courses = courses.map((ele) => {
    if (ele.id == course.id) return course;
    return ele;
  });
  fs.writeFileSync("./config/courses.json", JSON.stringify(courses), "utf8");
  return course;
};

module.exports = { getAllCourses, addCourse, updateCourse, getCourse };
