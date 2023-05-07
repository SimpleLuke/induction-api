import Knex from "knex";
import { Model } from "objection";
import { app } from "./app";

const port = 5000;
const database =
  process.env.NODE_ENV === "test"
    ? "induction_test_database"
    : "induction_database";

const knex = Knex({
  client: "pg",
  connection: {
    host: "localhost",
    database: database,
    port: 5432,
    password: "",
    user: "",
  },
});

// Connect database to Objection
Model.knex(knex);

app.listen(port, () =>
  console.log(`*:${port} - Listening on port ${port} ${process.env.NODE_ENV}`)
);
