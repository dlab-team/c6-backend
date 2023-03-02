'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PivoteSkillsTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Test, {
        foreignKey: 'testId',
        as: 'test'
      })
    }
  }
  PivoteSkillsTest.init({
    testId: { type: DataTypes.INTEGER, references: {model: 'Tests'} },
    skillsId: { type: DataTypes.INTEGER, references: { model: 'Skills'}}
  }, {
    sequelize,
    modelName: 'PivoteSkillsTest',
  });
  return PivoteSkillsTest;
};