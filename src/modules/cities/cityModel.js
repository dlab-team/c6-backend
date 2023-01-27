const { Model, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../../database/sequelize')
const User = require('../users/userModel')

const PROFILE_TABLE = 'profiles'

class Profile extends Model {}

const CitySchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  countryId: {
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
