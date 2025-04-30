import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/college.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  // steps
  // get data
  // check data
  // if not already registered
  // create entry
  const { username, email, password } = req.body;

  if (
    [username, email, password].some((field) => !field || field.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedAdmin = await Admin.findOne({
    $or: [{ username }, { email }],
  });
  if (existedAdmin) {
    throw new ApiError(409, "Admin with provided credintial already exist!");
  }
  const admin = await Admin.create({
    username,
    email,
    password,
  });
  const createdAdmin = await Admin.findById(admin._id);
  if (!createdAdmin) {
    throw new ApiError(
      500,
      createdAdmin,
      "somthing went wrong while registring the admin"
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(201, createdAdmin, "Admin registered successfully"));
});
const generateAccessAndRfreshTokens = async (adminId) => {
  try {
    const admin = await Admin.findById(adminId);
    const accessToken = await admin.generateAccessToken();
    const refreshToken = await admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });
    
    return { accessToken, refreshToken };

  } catch (error) {
    throw new ApiError(
      500,
      "somthing went wrong while generating the access and refresh token"
    );
  }
};
const loginUser = asyncHandler(async (req, res) => {
  // get details
  // check details
  // verify if exist
  // generate tokens

  const { email, username, password } = req.body;

  if (!(email && username)) {
    throw new ApiError(409, "username or email is required");
  }

  const admin = await Admin.findOne({ $or: [{ username }, { email }] });

  if (!admin) {
    throw new ApiError(404, "Specified admin does not exist!!");
  }

  if (!password) {
    throw new ApiError(409, "password is required");
  }
  const { accessToken, refreshToken } = await generateAccessAndRfreshTokens(
    admin._id
  );
  const loggedAdmin = await Admin.findById(admin._id)
  if(!loggedAdmin){
    throw new ApiError(409,"somthing went wrong while logging admin")
  }
  const options={
    httpOnly:true,
    secure:true
  }
  return res
  .status(200)
  .cookies("accessToken",accessToken,options)
  .cookies("refreshToken",refreshToken,options)
  .json( 
    new ApiResponse(
    200,
    {
      user: loggedUser,
      accessToken,
      refreshToken,
    },
    "user loggedIn Successfull"
  ))
});

export {
  registerUser,
  loginUser,
};
