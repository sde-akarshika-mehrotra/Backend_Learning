const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Backend_Learning")
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error ❌", err);
  });

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
