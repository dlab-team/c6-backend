const { Model, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../../database/sequelize')

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

User.init(UserSchema, {
  sequelize,
  modelName: 'User',
  tableName: USER_TABLE,
  timestamps: true,
  paranoid: true
})

module.exports = { User, UserSchema }
