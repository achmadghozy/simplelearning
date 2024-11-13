const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const teacherSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: `User`,
    required: true
  },
  course: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true
  }],
  grades: [{
    type: mongoose.Schema.ObjectId,
    ref: `Grades`,
    required: true
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);