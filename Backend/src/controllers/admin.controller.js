import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Student } from "../models/student.models.js";
import { Question } from "../models/questions.models.js";

const registerAdmin = asyncHandler(async (req, res) => {
  // steps
  // get data
  // check data
  // if not already registered
  // create entry

  // get details from the API request
  const { username, email, password } = req.body;
  // check if any field is empty
  if (
    [username, email, password].some((field) => !field || field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user already exist
  const existedAdmin = await Admin.findOne({
    $or: [{ username }, { email }],
  });
  // alredy registered the give error
  if (existedAdmin) {
    throw new ApiError(409, "Admin with provided credintial already exist!");
  }
  // otherwise create entry in database
  const admin = await Admin.create({
    username,
    email,
    password,
  });
  // check if cretaed sccessfully by search
  const createdAdmin = await Admin.findById(admin._id);
  // if not created
  if (!createdAdmin) {
    throw new ApiError(
      500,
      createdAdmin,
      "somthing went wrong while registring the admin"
    );
  }
  // if created successfully return some details
  return res
    .status(200)
    .json(new ApiResponse(201, createdAdmin, "Admin registered successfully"));
});

const deleteStudent = asyncHandler(async (req, res) => {
  // Ensure the user has the Admin role
  if (req.user.role !== "Admin") {
    throw new ApiError(403, "Access denied. Only Admins can delete students.");
  }

  // Get the student ID from the request (e.g., from req.params or req.body)
  const { studentName } = req.body; // Assuming the student ID is passed as a route parameter

  if (!studentName) {
    throw new ApiError(400, "Student ID is required.");
  }

  // Find and delete the student by ID
  const deletedStudent = await Student.findOneAndDelete(studentName);

  if (!deletedStudent) {
    throw new ApiError(404, "Student not found. Deletion failed.");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        deletedStudent,
        "Student removed from the database successfully!"
      )
    );
});

const checkAdminRole = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

const createProblem = asyncHandler(async (req, res) => {
  // get details
  const { subject, problemStatement, options, correctOption, markAllocated } =
    req.body;
  //check if  everything present
  if (
    [subject, problemStatement, correctOption].some(
      (field) => !field || field.trim() === ""
    )
  ) {
    throw new ApiError(401, "Each feild is mendatory!!");
  }
  if(options.length <1){
    throw new ApiError(401, "Each feild is mendatory!!");
  }

  // insert problem into db
  await Question.create({
    subject,
    problemStatement,
    options,
    correctOption,
    markAllocated,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, "problem created successfully"));
});
const getProblem = asyncHandler(async(req,res)=>{
  const {subject} = req.body;
  const problems = await Question.find({subject})
  return res.status(200).json(new ApiResponse(200,problems))
}) 

const registerStudent = asyncHandler(async (req, res) => {
  // get student data
  const { fullName, email, password } = req.body;
// check for consistecy
  if ([email,fullName, password].some((feild) => !feild || feild.trim() === "")) {
    throw new ApiError(401, "Each feild is required!!");
  }
// check if student aready exist
  const existAlready = await Student.findOne({
    $or:[{fullName},{email}]
  });
  if (existAlready) {
    throw new ApiError(
      409,
      "student with prvided crediential alrready exist!!"
    );
  }
// create student entry
 const student =  await Student.create({
  fullName,
    email,
    password,
  });

  // check if cretaed sccessfully by search
  const createdStudent = await Student.findById(student._id).select("-email -password");

  // if not created
  if (!createdStudent) {
    throw new ApiError(
      500,
      createdStudent,
      "somthing went wrong while registring the admin"
    );
  }
  // if created successfully return some details
  return res
    .status(200)
    .json(new ApiResponse(201, createdStudent, "Student registered successfully"));
});

export { 
    registerAdmin,
    deleteStudent,
    checkAdminRole,
    createProblem ,
    getProblem,
    registerStudent,
  };
