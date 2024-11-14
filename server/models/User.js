const mongoose = require('mongoose');
const bcrypt = require (`bcryptjs`)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [`student`, `teacher`, `admin`],
    default: `student`,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  dispPicture: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: [true, `Please add password`],
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
}, {
  timestamps: true
});

userSchema.pre(`save`, async function(next) {
  if (!this.isModified(`password`)) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);