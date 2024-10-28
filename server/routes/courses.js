const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse
} = require('../controllers/courseController');

router
  .route('/')
  .get(getCourses)
  .post(protect, authorize('teacher', 'admin'), createCourse);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('teacher', 'admin'), updateCourse)
  .delete(protect, authorize('teacher', 'admin'), deleteCourse);

router
  .route('/:id/enroll')
  .post(protect, authorize('student'), enrollCourse);

module.exports = router;