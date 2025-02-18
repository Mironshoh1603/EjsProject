const fs = require("fs");

let getAllTeachers = () => {
  let teachers = JSON.parse(fs.readFileSync("./config/teachers.json", "utf8"));
  return teachers;
};

module.exports = { getAllTeachers };
