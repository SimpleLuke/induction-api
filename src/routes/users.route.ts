import express from "express";
import UsersController from "../controllers/users.controller";

const usersRouter = express.Router();

usersRouter.get("/:id", UsersController.GetUser);

export default usersRouter;
