import express from "express";
import { login } from "../controller/user.controller";

const userRouter = express.Router();

// userRouter.get("/");
userRouter.post("/login", login);

export default userRouter;
