
exports.up = (knex) => {
    return Knex.schema.alterTable("tasks", (table) => {
        table.dropForeingn("user_id");

        table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .oNDelete("CASACADE");
    });
  
};









exports.down = (knex) => {
    return knex.schema.alterTable("tasks", (table) => {
        table.dropForeingn("user_id");

        table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("NO ACTION");

    });
  
};
