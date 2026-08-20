const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Middleware works");
  next();
});

app.get("/", function (req, res) {
  res.send("Champion is me!");
});

app.get("/profile", function (req, res) {
  res.send("Champion you!");
});

app.listen(3000);
