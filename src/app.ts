import express, { Application, Request, Response, NextFunction } from "express";
import { User, UserShape } from "./model/user.model";

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      return response.status(200).send({ message: "OK" });
    } catch (error) {
      return response.status(404).send({ message: error });
    }
  }
);

app.get(
  "/users/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;

      const user = await User.query().findById(id);

      if (!user) {
        throw new Error("User not found");
      }
      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).send({ message: error });
    }
  }
);
