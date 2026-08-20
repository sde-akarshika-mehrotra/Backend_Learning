const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// app.use(function (req, res, next) {
//   console.log("Middleware works");
//   next();
// });

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  res.send(`Hy! ${req.params.username}`);
});

app.get("/author/:username/:age", function (req, res) {
  res.send(`Hy! I am ${req.params.username}. My age is ${req.params.age}`);
});


app.get("/profile", function (req, res) {
  res.send("Champion you!");
});

app.listen(3000);
