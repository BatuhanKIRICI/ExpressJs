const express = require("express");

const app = express();

const path = require("path");

app.use("/blogs/:blogid", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users", "blogs-details.html"));
});

app.use("/blogs", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users", "blogs.html"));
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users", "index.html"));
});

app.listen(3000, () => console.log("Listening on port 3000!"));
