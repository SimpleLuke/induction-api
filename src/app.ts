import express, { Application, Request, Response, NextFunction } from "express";
import { User, UserShape } from "./models/users.model";
import usersRouter from "./routes/users.route";
import chaptersRouter from "./routes/chapters.route";

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/chapters", chaptersRouter);
