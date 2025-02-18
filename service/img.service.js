const fs = require("fs");

let getAllimg = () => {
  let teachers = JSON.parse(fs.readFileSync("./config/slider.json", "utf8"));
  return teachers;
};

module.exports = { getAllimg };
