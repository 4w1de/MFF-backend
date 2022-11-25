/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('USERS', (table) => {
        table.integer('id').notNullable().unique();
        table.string('firstName').notNullable();
        table.string('secondString').notNullable();
        table.string('nickname', 30).notNullable().unique();
        table.date('dateOfBirth');
        table.string('country', 70);
        table.string('city', 70);
        table.string('about', 500);
        table.integer('role').notNullable().defaultTo(1);
        table.timestamp('timeCreate').notNullable().defaultTo(knex.fn.now());
        table
            .timestamp('timeLastUpdate')
            .notNullable()
            .defaultTo(knex.fn.now());
        table.string('iconProfile');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('USERS');
};
