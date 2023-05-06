import Knex from "knex";

const database = "induction_test_database";

// Create the database
async function createTestDatabase() {
  const knex = Knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "",
      password: "",
    },
  });

  try {
    await knex.raw(`DROP DATABASE IF EXISTS ${database}`);
    await knex.raw(`CREATE DATABASE ${database}`);
  } catch (error: unknown) {
    throw new Error(error as string);
  } finally {
    await knex.destroy();
  }
}

// Seed the database with schema and data
async function seedTestDatabase() {
  const knex = Knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: database,
      user: "",
      password: "",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  });

  try {
    await knex.migrate.latest();
    await knex.seed.run();
  } catch (error: unknown) {
    throw new Error(error as string);
  } finally {
    await knex.destroy();
  }
}

module.exports = async () => {
  try {
    await createTestDatabase();
    await seedTestDatabase();
    console.log("Test database created successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
