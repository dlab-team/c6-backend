const { Model, DataTypes, UUIDV4 } = require('sequelize')

const USER_TABLE = 'users'

class User extends Model {}

const UserSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

function init(sequelize) {
  User.init(UserSchema, {
    sequelize,
    tableName: USER_TABLE,
    timestamps: false
  })
  return User
}

module.exports = { User, UserSchema, init }
