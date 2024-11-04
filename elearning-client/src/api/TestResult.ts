import mongoose from 'mongoose';

const testResultSchema = new mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  courseId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  score: { 
    type: Number, 
    required: true 
  },
  answers: {
    type: Map,
    of: String
  },
  completedAt: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
});

export default mongoose.model('TestResult', testResultSchema);