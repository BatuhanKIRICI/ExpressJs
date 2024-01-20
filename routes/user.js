const express = require("express");

const router = express.Router();

const data = {
  title: "Popular courses",
  categories: [
    "Web Development",
    "Programming",
    "Mobile Development",
    "Data Analysis",
    "Office Apps",
  ],
};

router.use("/blogs/:blogid", (req, res) => {
  res.render("users/blogs-details");
});

router.use("/blogs", (req, res) => {
  res.render("users/blogs");
});

router.use("/", (req, res) => {
  res.render("users/index", data);
});

module.exports = router;
