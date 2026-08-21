const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

// // app.use(function (req, res, next) {
// //   console.log("Middleware works");
// //   next();
// // });

// app.get("/", function (req, res) {
//   fs.readdir(`./files`, function (err, files) {
//     res.render("index", { files: files });
//   });
// });

// app.get("/file/:filename", function (req, res) {
//   fs.readFile(
//     `./files/${req.params.filename}`,
//     "utf-8",
//     function (err, filedata) {
//       res.render("show", { filename: req.params.filename, filedata: filedata });
//     },
//   );
// });

// app.get("/edit/:filename", function (req, res) {
//   res.render("edit", { filename: req.params.filename });
// });

// app.post("/create", function (req, res) {
//   fs.writeFile(
//     `./files/${req.body.title.split(" ").join("")}.txt`,
//     req.body.details,
//     function (err) {
//       res.redirect("/");
//     },
//   );
// });

// app.post("/edit", function (req, res) {
//   fs.rename(
//     `./files/${req.body.previous}`,
//     `./files/${req.body.new}`,
//     function (err) {
//       res.redirect("/");
//     },
//   );
// });

const userModel = require("./usermodels");

app.get("/", (rrq, res) => {
  res.send("Hey");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Arya",
    email: "arya@gmail.com",
    username: "aradhya",
  });

  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "ashika" },
    { name: "Raj" },
    { new: "true" },
  );
  res.send(updateduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();

  res.send(users);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "ashika" });

  res.send(users);
});

app.listen(3000);
