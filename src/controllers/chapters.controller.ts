import express, { Application, Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { transaction } from "objection";
import { User, UserShape } from "../models/users.model";
import { Login } from "../models/logins.model";

const ChaptersController = {
  GetCompleted: async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = request.params;

      const user = await User.query().findById(id);

      if (!user) {
        throw new Error("User not found");
      }
      return response.status(200).send({ completed: user.completed });
    } catch (error) {
      return response.status(400).send({ message: error });
    }
  },
};

export default ChaptersController;
