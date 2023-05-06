import express, { Application, Request, Response, NextFunction } from "express";

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
