const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/admin/blogs/create", (req, res) => {
  res.render("admin/blog-create");
});

router.use("/admin/blogs/:blogid", (req, res) => {
  res.render("admin/blog-edit");
});

router.use("/admin/blogs", (req, res) => {
  res.render("admin/blog-list");
});

module.exports = router;
