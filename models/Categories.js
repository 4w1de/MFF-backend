const { Model } = require('objection');

class Categories extends Model {
    static get tableName() {
        return 'CATEGORIES';
    }
    static get relationMappings() {
        const Sections = require('./Sections');
        return {
            sections: {
                relation: Model.HasOneRelation,
                modelClass: Sections,
                join: {
                    from: 'CATEGORIES.idSection',
                    to: 'SECTIONS.id',
                },
            },
        };
    }
}

module.exports = Categories;
