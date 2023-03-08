'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.PivoteSkillsTest, {
        foreignKey: 'testId',
        as: 'pivoteSkillsTest'
      })
    }
  }
  Test.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    imagenUrl: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};