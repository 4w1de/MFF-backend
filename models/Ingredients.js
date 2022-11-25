const { Model } = require('objection');

class Ingredients extends Model {
    static get tableName() {
        return 'INGREDIENTS';
    }
    static get relationMappings() {
        const ListIngredients = require('./ListIngredients');
        const Recipes = require('./Recipes');
        return {
            recipes: {
                relation: Model.HasOneRelation,
                modelClass: Recipes,
                join: {
                    from: 'INGREDIENTS.idRecipe',
                    to: 'RECIPES.id',
                },
            },
            listIngredients: {
                relation: Model.HasOneRelation,
                modelClass: ListIngredients,
                join: {
                    from: 'INGREDIENTS.idIngredient',
                    to: 'LIST_INGREDIENTS.id',
                },
            },
        };
    }
}

module.exports = Ingredients;
