const express = require("express");

const app = express();


app.get("/", function (req, res) {
 return res.send("Hello World via Github Actions");
});


app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
});

module.exports = app;
