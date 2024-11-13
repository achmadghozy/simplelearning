const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a course title'],
    trim: true,
    maxlength: [50, 'Title cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  thumbnail: {
    type: String,
    default: 'default-course.jpg'
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['programming', 'design', 'business', 'marketing', 'other']
  },
  enrolledStudents: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Student'
  }],
  correctAnswer: {
    type: [Number],
    required: true
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Course', courseSchema);