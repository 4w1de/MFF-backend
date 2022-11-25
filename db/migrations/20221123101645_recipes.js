/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('RECIPES', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('idUser')
            .unsigned()
            .references('id')
            .inTable('USERS')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('title', 150).notNullable();
        table.string('description', 2500);
        table.timestamp('timeCreate').notNullable().defaultTo(knex.fn.now());
        table
            .timestamp('timeLastUpdate')
            .notNullable()
            .defaultTo(knex.fn.now());
        table.integer('status').notNullable().defaultTo('1');
        table.string('imgPreview');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('RECIPES');
};
