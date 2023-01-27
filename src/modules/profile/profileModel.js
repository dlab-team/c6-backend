const { Model, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../../database/sequelize')
const User = require('../users/userModel')

const PROFILE_TABLE = 'profiles'

class Profile extends Model {}

const ProfileSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  fullName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM
  },
  avatar: {
    allowNull: true,
    type: DataTypes.STRING
  },
  cityId: {
    allowNull: false,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
        model: User.tableName,
        key: 'id'
    }
}

}

Profile.init(ProfileSchema, {
  sequelize,
  modelName: 'Profile',
  tableName: PROFILE_TABLE,
  timestamps: false
})

module.exports = { Profile, ProfileSchema }
