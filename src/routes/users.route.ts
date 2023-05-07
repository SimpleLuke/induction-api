import express from "express";
import UsersController from "../controllers/users.controller";

const usersRouter = express.Router();

usersRouter.get("/:id", UsersController.GetUser);
usersRouter.post("/register", UsersController.CreateUser);
usersRouter.post("/signin", UsersController.SignIn);

export default usersRouter;
