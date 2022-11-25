const { Model } = require('objection');

class Reviews extends Model {
    static get tableName() {
        return 'REVIEWS';
    }
    static get relationMappings() {
        const Users = require('./Users');
        const Recipes = require('./Recipes');
        return {
            recipes: {
                relation: Model.HasOneRelation,
                modelClass: Recipes,
                join: {
                    from: 'REVIEWS.idRecipe',
                    to: 'RECIPES.id',
                },
            },
            users: {
                relation: Model.HasOneRelation,
                modelClass: Users,
                join: {
                    from: 'REVIEWS.idUser',
                    to: 'USERS.id',
                },
            },
        };
    }
}

module.exports = Reviews;
