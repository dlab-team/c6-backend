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
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        as: 'city'
      })
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    }
  }
  Profile.init(
    {
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.ENUM('masculino', 'femenino', 'otro'),
      avatar: DataTypes.STRING,
      cityId:  { type: DataTypes.INTEGER, references: { model: 'Cities' } },
      userId: { type: DataTypes.INTEGER, references: { model: 'Users' } }
    },
    {
      sequelize,
      modelName: 'Profile'
    }
  )
  return Profile
}
