/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("users", function (table) {
    table.increments("id").primary().unique();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.date("joined").notNullable();
    table.specificType("completed", "text[]");
  });
  await knex.schema.createTable("logins", function (table) {
    table.increments("id").primary().unique();
    table.string("email").notNullable().unique();
    table.string("hash").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("users");
  await knex.schema.dropTable("logins");
};
