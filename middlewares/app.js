const express = require("express");
const cors = require("cors");

const app = express();

let renderRouter = require("../routes/render.route");
let renderFacilities = require("../routes/facilities.route.js");
const nodemon = require("nodemon");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://islombek.uz"],
    // credentials: true,
  })
);

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.use("/", renderRouter);
app.use(renderFacilities);
// localhost:3000
// islombek.uz

module.exports = app;
