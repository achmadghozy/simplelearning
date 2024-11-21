const express = require('express');
const router = express.Router();
const {
    createGrade,
    getGrades,
    getGradeById,
    getGradesByStudent,
    getGradesByCourse,
    updateGrade,
    deleteGrade
} = require('../controllers/gradeController');
const { protect } = require('../middleware/authMiddleware');

// Protect all routes
router.use(protect);

router.route('/')
    .post(createGrade)
    .get(getGrades);

router.route('/:id')
    .get(getGradeById)
    .put(updateGrade)
    .delete(deleteGrade);

router.get('/student/:studentId', getGradesByStudent);
router.get('/course/:courseId', getGradesByCourse);

module.exports = router;