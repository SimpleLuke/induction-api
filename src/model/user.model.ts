import { Model, ModelObject } from "objection";

export class User extends Model {
  id!: string;
  name!: string;
  email!: string;
  joined: Date = new Date();

  static tableName = "users"; // database table name
  static idColumn = "id"; // id column name
}

export type UserShape = ModelObject<User>;
