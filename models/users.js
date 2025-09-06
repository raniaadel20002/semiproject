const {hash}  = require('crypto');
const mongoose = require('mongoose');


const user= new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    hash: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  passwordResetToken: {
    type: String,
    default: null,
  },
  passwordResetTokenExpiry: {
    type: Date,
    default: null,
  },
  otp: {
    type: String,
    default: null,
  },
  otpExpiry: {
    type: Date,
    default: null,
  }
});



const userData = mongoose.model('User', user);

module.exports = {userData}