const express = require("express");

const app = express();

let renderRouter = require("../routes/render.route");
let renderFacilities = require('../routes/facilities.route.js')

app.use(express.json());

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.use("/", renderRouter);
app.use(renderFacilities)

module.exports = app;
