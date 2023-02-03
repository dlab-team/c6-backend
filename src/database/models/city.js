'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Country, {
        foreignKey: 'countryId',
        as: 'country'
      })
     
    }
  }
  City.init({
    name: DataTypes.STRING,
    countryId: {
      type: DataTypes.INTEGER,
      references: { model: 'Countries' },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};