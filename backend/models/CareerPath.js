const mongoose = require('mongoose');

const careerPathSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  educationLevelRequired: {
    type: String,
    required: true,
  },
  skillsRequired: [{
    type: String
  }],
  salaryExpected: {
    type: String
  },
  futureScope: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('CareerPath', careerPathSchema);
