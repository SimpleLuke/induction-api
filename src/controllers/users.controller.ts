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
};

export default UsersController;
