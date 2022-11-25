/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('MAP_RECIPES_CATEGORIES', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('idRecipe')
            .unsigned()
            .references('id')
            .inTable('RECIPES')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('idCategory')
            .unsigned()
            .references('id')
            .inTable('CATEGORIES')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('MAP_RECIPES_CATEGORIES');
};
