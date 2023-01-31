const { Model, DataTypes, UUIDV4 } = require('sequelize')
const USER_TABLE = require('../users/userModel')
const CITY_TABLE = require('../cities/cityModel')

const PROFILE_TABLE = 'profiles'

class Profile extends Model {
  static associate(sequelize){
    this.belongsTo(sequelize.model.User, {
      foreignKey: 'userId'
    })

    this.belongsTo(sequelize.model.City, {
      foreignKey: 'cityId'
    })
  }
}

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
    type: DataTypes.UUID,
    field: 'city_id',
    unique: true,
    references: {
        model: CITY_TABLE
    }
  },
  userId: {
    allowNull: false,
    type: DataTypes.UUID,
    field: 'user_id',
    unique: true,
    references: {
        model: USER_TABLE
    }
  }
}

function init(sequelize){
  Profile.init(ProfileSchema, {
    sequelize,
    tableName: PROFILE_TABLE,
    timestamps: false
  })
  return Profile
} 

module.exports = { Profile, ProfileSchema, PROFILE_TABLE, init }
