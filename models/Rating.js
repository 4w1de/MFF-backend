const { Model } = require('objection');

class Rating extends Model {
    static get tableName() {
        return 'RATING';
    }
    static get relationMappings() {
        const Users = require('./Users');
        const Recipes = require('./Recipes');
        return {
            recipes: {
                relation: Model.HasOneRelation,
                modelClass: Recipes,
                join: {
                    from: 'RATING.idRecipe',
                    to: 'RECIPES.id',
                },
            },
            users: {
                relation: Model.HasOneRelation,
                modelClass: Users,
                join: {
                    from: 'RATING.idUser',
                    to: 'USERS.id',
                },
            },
        };
    }
}

module.exports = Rating;
