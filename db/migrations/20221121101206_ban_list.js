/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('BAN_LIST', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('idUser')
            .unsigned()
            .references('id')
            .inTable('USERS')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('banTerm').notNullable();
        table.timestamp('dateOfBan').notNullable().defaultTo(knex.fn.now());
        table.string('comment', 500);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('BAN_LIST');
};
