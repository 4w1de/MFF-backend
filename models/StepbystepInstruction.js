const { Model } = require('objection');

class StepbystepInstruction extends Model {
    static get tableName() {
        return 'STEP_BY_STEP_INSTRUCTION';
    }
    static get relationMappings() {
        const Recipes = require('./Recipes');
        return {
            recipes: {
                relation: Model.HasOneRelation,
                modelClass: Recipes,
                join: {
                    from: 'STEP_BY_STEP_INSTRUCTION.idRecipe',
                    to: 'RECIPES.id',
                },
            },
        };
    }
}

module.exports = StepbystepInstruction;
