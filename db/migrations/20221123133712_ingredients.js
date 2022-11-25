/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('INGREDIENTS', (table) => {
        table.integer('id').notNullable().unique();
        table
            .integer('idRecipe')
            .unsigned()
            .references('id')
            .inTable('RECIPES')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('idIngredient')
            .unsigned()
            .references('id')
            .inTable('LIST_INGREDIENTS')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.float('volume').notNullable();
        table.integer('unitOfMeasure').notNullable().defaultTo(1);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('INGREDIENTS');
};
