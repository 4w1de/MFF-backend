const { Model } = require('objection');

class Recipes extends Model {
    static get tableName() {
        return 'RECIPES';
    }
    static get relationMappings() {
        const Users = require('./Users');
        return {
            users: {
                relation: Model.HasOneRelation,
                modelClass: Users,
                join: {
                    from: 'RECIPES.idUser',
                    to: 'USERS.id',
                },
            },
        };
    }
}

module.exports = Recipes;
