import { Login, LoginShape } from "../../../src/models/logins.model";

describe("Login model", () => {
  it("should create a new login instance", () => {
    const login = new Login();

    expect(login).toBeDefined();
    expect(login).toBeInstanceOf(Login);
  });

  it("should create a new login instance with specified values", () => {
    const loginValues: LoginShape = {
      id: "1",
      email: "johndoe@example.com",
      hash: "$2b$10$MiVJR265YUv47G0wbW6RhepbRsOh/UmBMY6kZukJG1IXnBmp9Uyt6",
    };

    const login = new Login(loginValues);

    expect(login).toBeDefined();
    expect(login).toBeInstanceOf(Login);
    expect(login.id).toBe(loginValues.id);
    expect(login.email).toBe(loginValues.email);
    expect(login.hash).toEqual(loginValues.hash);
  });

  it("should have correct table name and id column", () => {
    expect(Login.tableName).toBe("logins");
    expect(Login.idColumn).toBe("id");
  });
});
