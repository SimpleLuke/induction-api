import request from "supertest";
import { app } from "../../src/app";

describe("GET /", () => {
  it("GET / => message with OK", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ message: "OK" });
      });
  });
});
