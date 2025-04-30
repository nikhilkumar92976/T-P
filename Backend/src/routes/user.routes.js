import { Router } from "express";
import { registerUser } from "../controllers/admin.controller.js";
const userRouter = Router();
userRouter.route("/register").post(registerUser);

export default userRouter;
