import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    index:true,
  },
  problemStatement: {
    type: String,
    required: true,
  },
  options:{
    type: [String],
    required:true,
    validate:{
      validator:function(optionArray){
        return optionArray.length >=2;
      }
    },
  },
  correctOption: {
    type: String,
    required: true,
    validate:{
      validator:function(answer){
        return this.options.some((feild)=> feild===answer)
      }
    },
  },
  markAllocated: {
    type: Number,
    default: 1,
  },
});

 export const Question = mongoose.model("Question", questionSchema);
