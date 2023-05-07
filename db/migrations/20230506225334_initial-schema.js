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
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("users");
};
