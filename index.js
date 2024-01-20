const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});

app.use((req, res) => {
  console.log("middleware 3");
  res.send("<h1>Home Page</h1>");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
