const express = require("express");
const cors = require("cors");

const app = express();

let renderRouter = require("../routes/render.route");
let courseRouter = require("../routes/course.route");
const nodemon = require("nodemon");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://islombek.uz"],
    // credentials: true,
  })
);

app.use(express.static("./public"));

app.use((req, res, keyingisi) => {
  // if (!req.headers.authorization) {
  //   throw new Error("Sizda royxatdan o'tmagansiz!");
  // }
  console.log("Bu middleware", req.headers.authorization);
  keyingisi();
});

app.set("view engine", "ejs");
app.set("views", "./public/views");

//Dynamic
app.use("/", renderRouter);

//api
app.use("/api/v1/courses", courseRouter);

// app.use(renderFacilities);
// localhost:3000
// islombek.uz

app.use((err, req, res, next) => {
  console.log(err);

  res.status(404).send(err.message);
});
module.exports = app;
