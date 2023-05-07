import { Model, ModelObject } from "objection";

export class Login extends Model {
  id!: string;
  email!: string;
  hash!: string;

  static tableName = "logins"; // database table name
  static idColumn = "id"; // id column name

  constructor(login?: Partial<Login>) {
    super();
    if (login) {
      Object.assign(this, login);
    }
  }
}

export type LoginShape = ModelObject<Login>;
