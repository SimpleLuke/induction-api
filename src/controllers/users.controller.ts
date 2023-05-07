import express, { Application, Request, Response, NextFunction } from "express";
import { User, UserShape } from "../models/users.model";

const UsersController = {
  GetUser: async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;

      const user = await User.query().findById(id);

      if (!user) {
        throw new Error("User not found");
      }
      return response.status(200).send(user);
    } catch (error) {
      return response.status(400).send({ message: error });
    }
  },
  CreateUser: async (request: Request, response: Response) => {
    try {
      const { email, name } = request.body;
      const new_user = await User.query().insert({
        email: email,
        name: name,
        joined: new Date(),
      });
      return response.status(200).send({ message: "New user created" });
    } catch (error) {
      return response.status(400).send({ message: error });
    }
  },
};

export default UsersController;
