import Knex from "knex";

const database = "induction_database";

const knex = Knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: database,
    user: "",
    password: "",
  },
});

module.exports = async () => {
  try {
    await knex.raw(`DROP DATABASE IF EXISTS ${database}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
