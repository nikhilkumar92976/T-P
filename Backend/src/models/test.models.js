import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  name: String,
  subjects: [String],
  for_branch: String,
  for_batch: String,
  date: Date,
  total_time: Number,  // in minutes
  total_score: Number,
  questions: [{
    subject: String,
    questions: [{
      questionText: String,
      options: [String],
      correctAnswer: String,
      marks: Number
    }]
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', testSchema);
