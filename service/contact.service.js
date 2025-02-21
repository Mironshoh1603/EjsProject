const fs = require("fs");
const { v4: uuid } = require("uuid");

let getAllContact = () => {
  let courses = JSON.parse(fs.readFileSync("./config/contact.json", "utf8"));
  return courses;
};

let addContact = (data) => {
  let courses = getAllContact();
  data.id = uuid();
  //   data.price = data.price ? data.price : 0;
  courses.push(data);
  fs.writeFileSync("./config/contact.json", JSON.stringify(courses), "utf8");
  return data;
};

module.exports = {
  getAllContact,
  addContact,
};

// let student = {
//     bahoOlmoq: () => {
//       console.log("Baho olyapman");
//     },
//   };
//   student.bahoOlmoq();
//   let { bahoOlmoq: baho } = student;
//   baho();
