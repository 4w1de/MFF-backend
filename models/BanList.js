const { Model } = require('objection');

class BanList extends Model {
    static get tableName() {
        return 'BAN_LIST';
    }
    static get relationMappings() {
        const Users = require('./Users');
        return {
            users: {
                relation: Model.HasOneRelation,
                modelClass: Users,
                join: {
                    from: 'BAN_LIST.idUser',
                    to: 'USERS.id',
                },
            },
        };
    }
}

module.exports = BanList;
