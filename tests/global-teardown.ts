import Knex from "knex";

const database = "induction_test_database";

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
    await knex.raw(
      "SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'induction_test_database' AND pid <> pg_backend_pid();"
    );
    await knex.raw(`DROP DATABASE IF EXISTS ${database}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
