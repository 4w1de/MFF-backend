/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('STEP_BY_STEP_INSTRUCTION', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('idRecipe')
            .unsigned()
            .references('id')
            .inTable('RECIPES')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('title', 400);
        table.string('text', 1500).notNullable();
        table.integer('rank').notNullable();
        table.string('imgInstruction');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('STEP_BY_STEP_INSTRUCTION');
};
