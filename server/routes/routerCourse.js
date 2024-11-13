const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

const {
  postACourse,
  getAllCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/controllerCourse');

router
  .route('/')
  .get(getAllCourses)
  .post(protect, authorize('teacher', 'admin'), postACourse);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('teacher', 'admin'), updateCourse)
  .delete(protect, authorize('teacher', 'admin'), deleteCourse);

module.exports = router;