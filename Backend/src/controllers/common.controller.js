import { asyncHandler } from "../utils/asyncHandler.js";
import { Admin } from "../models/admin.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
 
const generateAccessAndRefreshTokens = async (adminId) => {
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
  // get data from login API request
  const { username, email, password } = req.body;
  // check if username or email one of them is present
  if (!(email || username)) {
    throw new ApiError(400, "username or email is required");
  }
  // check byv username or by email if user is registerd or not
  const admin = await Admin.findOne({ $or: [{ username }, { email }] });

  // if not found means not registered
  if (!admin) {
    throw new ApiError(404, "Specified admin does not exist!!");
  }
  // if registered check if password feild is not empty
  if (!password) {
    throw new ApiError(409, "password is required");
  }
  // verify password if matches with existed one
  const isPasswordCorrect = await admin.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  // now generate tokens for login session also store in db showing login
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    admin._id
  );

  const loggedAdmin = await Admin.findById(admin._id);
  if (!loggedAdmin) {
    throw new ApiError(409, "somthing went wrong while logging admin");
  }

  // options for preventing change of tokens by frontend
  const options = {
    httpOnly: true,
    secure: true,
  };
  // return access and refresh token for localstorage and session for no need of login before session expires
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedAdmin,
          accessToken,
          refreshToken,
        },
        "user loggedIn Successfull"
      )
    );
});
const logoutUser = asyncHandler(async (req, res) => {
  // find user and remove the refreshToken denoting the login status
  await Admin.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  // options for preventing change of tokens by frontend
  const options = {
    httpOnly: true,
    secure: true,
  };
  // now clean the cookies for stored tokens so that session can be end and no subsequent requests can be made by these tokens
  return res
  .status(200)
  .cookie("accessToken",options)
  .cookie("refreshToken",options)
  .json(
    new ApiResponse(200,"user logged out successfully!!")
  )
});
 

export { loginUser,logoutUser };
  