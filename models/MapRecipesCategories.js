const { Model } = require('objection');

class MapRecipesCategories extends Model {
    static get tableName() {
        return 'MAP_RECIPES_CATEGORIES';
    }
    static get relationMappings() {
        const Categories = require('./Categories');
        const Recipes = require('./Recipes');
        return {
            recipes: {
                relation: Model.HasOneRelation,
                modelClass: Recipes,
                join: {
                    from: 'MAP_RECIPES_CATEGORIES.idRecipe',
                    to: 'RECIPES.id',
                },
            },
            categories: {
                relation: Model.HasOneRelation,
                modelClass: Categories,
                join: {
                    from: 'MAP_RECIPES_CATEGORIES.idCategory',
                    to: 'CATEGORIES.id',
                },
            },
        };
    }
}

module.exports = MapRecipesCategories;
