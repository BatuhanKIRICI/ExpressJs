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
  blogs: [
    {
      blogid: 1,
      title: "Complete Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut.",
      image: "1.jpeg",
      homePage: true,
    },
    {
      blogid: 2,
      title: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut.",
      image: "2.jpeg",
      homePage: true,
    },
    {
      blogid: 3,
      title: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, aut.",
      image: "3.jpeg",
      homePage: false,
    },
  ],
};

router.use("/blogs/:blogid", (req, res) => {
  res.render("users/blogs-details");
});

router.use("/blogs", (req, res) => {
  res.render("users/blogs", data);
});

router.use("/", (req, res) => {
  res.render("users/index", data);
});

module.exports = router;
