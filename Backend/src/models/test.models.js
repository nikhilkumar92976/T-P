import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  subjects:[{
    type:String,
    required:true,
    index:true
  }],
  for_branch: [{
    type:String,
    required:true,
    enum:["AIML","CSE","EC","EX","DS","CY","AIDS","BS"],
    index:true
  }],
  for_batch:{
    type:String,
    default: () => new Date().getFullYear().toString(), // Sets the default to the current year as a string
    index:true
  },
  total_time: {
    type:Number,// in minute
    required:true,
    default:60 // in minute
  },
  total_score:{
    type:Number,
    required:true,
    default:100  // points 
  },
testSet: [{
  section: {
    type: String, // e.g., "A", "B", etc.
    required: true
  },
  problems: [{
    problem:mongoose.Schema.Types.ObjectId,
    ref:"Question"
  }]
}],
},{timestamps:true});

export const Test = mongoose.model('Test', testSchema);
