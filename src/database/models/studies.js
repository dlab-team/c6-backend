'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Studies.init(
    {
      educationalProfileId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'EducationalProfile'
        },
        allowNull: false
      },
      name: DataTypes.STRING,
      institutionId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Studies',
    });
  return Studies;
};