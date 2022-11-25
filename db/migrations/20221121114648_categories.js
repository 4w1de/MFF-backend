/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('CATEGORIES', (table) => {
        table.integer('id').notNullable().unique();
        table.string('name').notNullable().unique();
        table
            .integer('idSection')
            .unsigned()
            .references('id')
            .inTable('SECTIONS')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('CATEGORIES');
};
