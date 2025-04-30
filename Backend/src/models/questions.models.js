import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  test_id: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Test' 
    },
  subject: String,
  problemtStatement: String,
  options: [String],
  correctAnswer: String,
  markAllocated: {
    type:Number,
    
  },
});

module.exports = mongoose.model('Question', questionSchema);
