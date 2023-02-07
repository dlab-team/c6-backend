'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstitutionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Institution, {
        foreignKey: 'institutionTypeId',
        as: 'institution'
      })
    }
  }
  InstitutionType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InstitutionType',
  });
  return InstitutionType;
};