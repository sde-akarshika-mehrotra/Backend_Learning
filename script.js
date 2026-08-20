const fs = require("fs");

fs.writeFile("hello.txt", "Hyy how are you", function (err) {
  if (err) console.log(err);
  else console.log("Done");
});
