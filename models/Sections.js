const { Model } = require('objection');

class Sections extends Model {
    static get tableName() {
        return 'SECTIONS';
    }
}

module.exports = Sections;
