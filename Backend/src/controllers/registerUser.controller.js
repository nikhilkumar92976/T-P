import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser =asyncHandler(async(req,res)=>{
    // steps
    // get data
    // check data
    // if not already registered
    // create entry
    const {username,email,password} = req.body;

    if (
        [username, email, password].some(
          (field) => !field || field.trim() === ""
        )
      ) {
        throw new ApiError(400, "All fields are required");
      }
      
})
export default registerUser