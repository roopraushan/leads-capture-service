const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
  },
  university: {
    type: String,
    required: false,
    trim: true,
  },
  program: {      // Fixed typo from "programm"
    type: String,
    required: false,
    trim: true,
  },
  elective: {
    type: String,
    required: false,
    trim: true,
  },
  state: {
    type: String,
    required: false,
    trim: true,
  },
  city: {
    type: String,
    required: false,
    trim: true,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt automatically
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
