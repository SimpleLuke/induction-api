import request from "supertest";
import Knex from "knex";
import { Model } from "objection";

import { app } from "../../../src/app";

describe("users", () => {
  let knex: any;
  let seededUsers: any;

  beforeAll(async () => {
    knex = Knex({
      client: "pg",
      connection: {
        host: "127.0.0.1",
        database: "induction_test_database",
        port: 5432,
        password: "",
        user: "",
      },
    });
    Model.knex(knex);

    // Seed anything
    seededUsers = await knex("users")
      .insert([{ name: "Tony", email: "tony@gmail.com", joined: new Date() }])
      .returning("*");
  });

  afterAll(async () => {
    await knex.destroy();
  });

  describe("GET /users/:id", () => {
    it("should return a user", async () => {
      const id = seededUsers[0].id;

      const { body: user } = await request(app).get(`/users/${id}`).expect(200);

      expect(user.id).toBe(id);
      expect(user.name).toBe("Tony");
    });

    it("should return 404 when user not found", async () => {
      const response = await request(app).get(`/users/999`);
      expect(response.statusCode).toBe(400);
    });
  });

  describe("POST /users/register", () => {
    it("should create a new user", async () => {
      const response = await request(app)
        .post("/users/register")
        .send({
          email: "marry@email.com",
          name: "Marry",
          joined: new Date("2023-05-07"),
        });
      expect(response.statusCode).toBe(200);
    });
  });
});
