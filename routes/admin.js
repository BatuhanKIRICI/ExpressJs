const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/admin/blogs/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/admin", "blog-create.html"));
});

router.use("/admin/blogs/:blogid", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/admin", "blog-edit.html"));
});

router.use("/admin/blogs", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/admin", "blog-list.html"));
});

module.exports = router;
