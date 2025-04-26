import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  password: { 
    type: String,
    required: [true, "password is required"] 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type:String,
    required:true,
    trim:true
  },
  college_id: {
    type:String,
    required
  },
  subject:[{
    type:String,
  }],
},{timestamps:true});

export const College = mongoose.model("College", collegeSchema);
