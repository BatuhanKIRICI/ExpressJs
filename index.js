const express = require("express");

const app = express();

app.use("/products/:id/users/:username", (req, res) => {
  console.log(req.params.username);
  res.send("Products detail");
});

app.use("/products", (req, res) => {
  res.send("Products");
});

app.use("/", (req, res) => {
  res.send("Home page");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
