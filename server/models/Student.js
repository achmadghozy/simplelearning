const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  course: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
  }],
  progress: {
    type: Number,
    default: 0
  },
  completedLessons: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Grades'
  }],
  status: {
    type: String,
    enum: ['active', 'completed', 'dropped'],
    default: 'active'
  }
});

module.exports = mongoose.model('Student', studentSchema);