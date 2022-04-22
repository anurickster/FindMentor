const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail } = require('validator');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Please enter valid email'],
  },
  phone: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
    options: ['User', 'Mentor', 'Admin'],
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minLength: 6,
  },
  role: {
    type: String,
    default: 'Student',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
  const token = jwt.sign({ id: this._id, role: this.role }, 'p@ssw0rd', {
    expiresIn: '10d',
  });
  return token;
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
