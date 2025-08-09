import { Router } from "express";
import {  checkAdminRole, createProblem, deleteStudent,getProblem,registerAdmin, registerStudent } from "../controllers/admin.controller.js";
import {  loginUser, logoutUser } from "../controllers/common.controller.js";
import verifyJwt from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerAdmin)// done
userRouter.route("/login").post(loginUser)// done
userRouter.route("/logout").post(verifyJwt,logoutUser)// done

userRouter.route("/register_student").post(verifyJwt,checkAdminRole,registerStudent)// done
userRouter.route("/delete_student").post(verifyJwt,checkAdminRole,deleteStudent)//done

userRouter.route("/create_problem").post(verifyJwt,checkAdminRole,createProblem)// done
userRouter.route("/get_problems").get(verifyJwt,checkAdminRole,getProblem) // done
export default userRouter;
