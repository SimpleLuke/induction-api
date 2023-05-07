import express, { Application, Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { transaction } from "objection";
import { User, UserShape } from "../models/users.model";
import { Login } from "../models/logins.model";

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
      const { email, name, password } = request.body;
      const hash = bcrypt.hashSync(password, 10);
      await Login.transaction(async (trx) => {
        await Login.query().insert({
          email: email,
          hash: hash,
        });
        const new_user = await User.query().insert({
          email: email,
          name: name,
          joined: new Date(),
        });
      });
      return response.status(200).send({ message: "New user created" });
    } catch (error) {
      return response.status(400).send({ message: "Unable to register" });
    }
  },
};

export default UsersController;
