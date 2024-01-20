const express = require("express");

const router = express.Router();

const path = require("path");

router.use("/blogs/:blogid", (req, res) => {
  res.render("users/blogs-details");
});

router.use("/blogs", (req, res) => {
  res.render("users/blogs");
});

router.use("/", (req, res) => {
  res.render("users/index");
});

module.exports = router;
