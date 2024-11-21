const Grade = require('../models/Grades');
const asyncHandler = require('express-async-handler');

// @desc    Create new grade
// @route   POST /api/grades
// @access  Private
const createGrade = asyncHandler(async (req, res) => {
    const { course, student, grade, answer } = req.body;

    const newGrade = await Grade.create({
        course,
        student,
        grade,
        answer
    });

    res.status(201).json(newGrade);
});

// @desc    Get all grades
// @route   GET /api/grades
// @access  Private
const getGrades = asyncHandler(async (req, res) => {
    const grades = await Grade.find({})
        .populate('course', 'name')
        .populate('student', 'name');
    res.json(grades);
});

// @desc    Get grade by ID
// @route   GET /api/grades/:id
// @access  Private
const getGradeById = asyncHandler(async (req, res) => {
    const grade = await Grade.findById(req.params.id)
        .populate('course', 'name')
        .populate('student', 'name');

    if (grade) {
        res.json(grade);
    } else {
        res.status(404);
        throw new Error('Grade not found');
    }
});

// @desc    Get grades by student
// @route   GET /api/grades/student/:studentId
// @access  Private
const getGradesByStudent = asyncHandler(async (req, res) => {
    const grades = await Grade.find({ student: req.params.studentId })
        .populate('course', 'name')
        .populate('student', 'name');
    res.json(grades);
});

// @desc    Get grades by course
// @route   GET /api/grades/course/:courseId
// @access  Private
const getGradesByCourse = asyncHandler(async (req, res) => {
    const grades = await Grade.find({ course: req.params.courseId })
        .populate('course', 'name')
        .populate('student', 'name');
    res.json(grades);
});

// @desc    Update grade
// @route   PUT /api/grades/:id
// @access  Private
const updateGrade = asyncHandler(async (req, res) => {
    const grade = await Grade.findById(req.params.id);

    if (grade) {
        grade.grade = req.body.grade || grade.grade;
        grade.answer = req.body.answer || grade.answer;

        const updatedGrade = await grade.save();
        res.json(updatedGrade);
    } else {
        res.status(404);
        throw new Error('Grade not found');
    }
});

// @desc    Delete grade
// @route   DELETE /api/grades/:id
// @access  Private
const deleteGrade = asyncHandler(async (req, res) => {
    const grade = await Grade.findById(req.params.id);

    if (grade) {
        await grade.deleteOne();
        res.json({ message: 'Grade removed' });
    } else {
        res.status(404);
        throw new Error('Grade not found');
    }
});

module.exports = {
    createGrade,
    getGrades,
    getGradeById,
    getGradesByStudent,
    getGradesByCourse,
    updateGrade,
    deleteGrade
};