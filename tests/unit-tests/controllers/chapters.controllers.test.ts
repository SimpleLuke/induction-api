import request from "supertest";
import Knex from "knex";
import { Model } from "objection";

import { app } from "../../../src/app";

describe("chapters", () => {
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
  });

  afterAll(async () => {
    await knex.destroy();
  });

  describe("GET /chapters/completed/:user_id", () => {
    it("should return completed chapters", async () => {
      const { body: response } = await request(app)
        .get(`/chapters/completed/1`)
        .expect(200);

      expect(response.completed).toEqual(["HL 5 Key Values", "The HL Way"]);
    });

    it("should return 400 when user not found", async () => {
      const response = await request(app).get(`/chapters/completed/999`);
      expect(response.statusCode).toBe(400);
    });
  });

  describe("PATCH /chapters/completed", () => {
    it("should update completed chapters", async () => {
      await request(app)
        .patch(`/chapters/completed`)
        .send({
          id: 1,
          chapter_name: "New Chapter",
        })
        .expect(200);
      const { body: response } = await request(app)
        .get(`/chapters/completed/1`)
        .expect(200);
      expect(response.completed).toEqual([
        "HL 5 Key Values",
        "The HL Way",
        "New Chapter",
      ]);
    });

    it("should return 400 when chapter is already completed", async () => {
      const response = await request(app)
        .patch(`/chapters/completed`)
        .send({
          id: 1,
          chapter_name: "HL 5 Key Values",
        })
        .expect(400);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe("Chapter is already completed");
    });

    it("should return 400 when user not found", async () => {
      const response = await request(app)
        .patch(`/chapters/completed`)
        .send({
          id: 999,
          chapter_name: "HL 5 Key Values",
        })
        .expect(400);
      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe("User not found");
    });
  });
});
