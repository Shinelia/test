const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/courses");

//Get all infos from all courses, including creator, poi, capsules and tags
//Get latitude and logitude from all poi from one course
router.get("/", coursesController.getCourses);

//Get latitude and logitude from all poi from one course
router.get("/:id", coursesController.getAllCoord);

module.exports = router;
