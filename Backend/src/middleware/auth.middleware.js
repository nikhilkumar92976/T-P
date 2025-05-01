import { asyncHandler } from "../utils/asyncHandler";
import cookieParser from "cookie-parser";
const verifyJwt = asyncHandler((req,res,next)=>{
    // get the token from the cookies of header
    const accessToken = req.cookies?.accessToken || req.header("Authrization")
})