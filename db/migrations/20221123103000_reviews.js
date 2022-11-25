/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('REVIEWS', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('idRecipe')
            .unsigned()
            .references('id')
            .inTable('RECIPES')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('idUser')
            .unsigned()
            .references('id')
            .inTable('USERS')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('idReview').defaultTo(0);
        table.string('comment', 500);
        table.string('imgReview');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('REVIEWS');
};
