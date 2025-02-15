const express = require("express");

const app = express();

let renderRouter = require("../routes/render.route");

app.use(express.json());

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");

app.use("/", renderRouter);

module.exports = app;
