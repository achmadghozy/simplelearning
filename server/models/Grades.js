const mongoose = require(`mongoose`)

const gradeSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.ObjectId,
        ref: `Course`,
        required: true
    },
    student: {
        type: mongoose.Schema.ObjectId,
        ref: `Student`,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    answer: {
        type: [Number],
        required: true
    },
    updateAt: {
        type: timestamps,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps:true
});

module.exports = mongoose.model(`Grades`, gradeSchema)

