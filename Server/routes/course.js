const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const Course = require('../models/course');
const router = express.Router();

// protect route: by isAuthenticatedUser middleware
router.get('/', async (req, res) => {
  let courses = await Course.find();
  res.json(courses);
});

router.get('/:id', async (req, res) => {
  let course = await Course.findById(req.params.id);
  res.json(course);
  console.log(req.params.id);
});

// protect route: by [isAuthenticatedUser, authorizeRoles('admin')]
router.post('/', async (req, res) => {
  // db and insert one course
  let course = await Course.create(req.body);
  res.status(201).json(course);
});

router.delete('/:id', async (req, res) => {
  // db and delete one course
  console.log(req.params.id);
  let result = await Course.findByIdAndDelete(req.params.id);
  console.log(result);
  res.json(result);
});

router.patch('/:id', async (req, res) => {
  // db and update one course
  let updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body);
  res.json(updatedCourse);
});

module.exports = router;
