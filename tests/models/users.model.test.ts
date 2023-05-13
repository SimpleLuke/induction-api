import { User, UserShape } from "../../src/models/users.model";

describe("User model", () => {
  it("should create a new user instance", () => {
    const user = new User();

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user.joined).toBeInstanceOf(Date);
  });

  it("should create a new user instance with specified values", () => {
    const userValues: UserShape = {
      id: "1",
      name: "John Doe",
      email: "johndoe@example.com",
      joined: new Date("2021-01-01"),
      completed: ["HL 5 Key Values"],
    };

    const user = new User(userValues);

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user.id).toBe(userValues.id);
    expect(user.name).toBe(userValues.name);
    expect(user.email).toBe(userValues.email);
    expect(user.joined).toEqual(userValues.joined);
  });

  it("should have correct table name and id column", () => {
    expect(User.tableName).toBe("users");
    expect(User.idColumn).toBe("id");
  });
});
