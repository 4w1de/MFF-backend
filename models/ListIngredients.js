const { Model } = require('objection');

class ListIngredients extends Model {
    static get tableName() {
        return 'LIST_INGREDIENTS';
    }
}

module.exports = ListIngredients;
