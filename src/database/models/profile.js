'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init(
    {
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.ENUM('masculino', 'femenino', 'otro'),
      avatar: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER, references: { model: 'Users' } }
    },
    {
      sequelize,
      modelName: 'Profile'
    }
  )
  return Profile
}
