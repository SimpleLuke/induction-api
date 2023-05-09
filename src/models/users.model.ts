import { Model, ModelObject } from "objection";

export class User extends Model {
  id!: string;
  name!: string;
  email!: string;
  joined: Date = new Date();
  completed: Array<string> = [];

  static tableName = "users"; // database table name
  static idColumn = "id"; // id column name

  constructor(user?: Partial<User>) {
    super();
    if (user) {
      Object.assign(this, user);
    }
  }
}

export type UserShape = ModelObject<User>;
