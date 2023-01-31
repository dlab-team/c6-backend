const { Model, DataTypes, UUIDV4 } = require('sequelize')

const CHARGE_TABLE = 'charges'

class Charge extends Model {
  static associate(sequelize) {
    this.belongsToMany(sequelize.models.WorkProfile, {
      through: 'work_profile_charges',
      foreignKey: 'charge_id',
      otherKey: 'work_profile_id'
    })
  }
}

const ChargeSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

function init(sequelize) {
  Charge.init(ChargeSchema, {
    sequelize,
    tableName: CHARGE_TABLE,
    timestamps: false
  })
  return Charge
}

module.exports = { Charge, ChargeSchema, CHARGE_TABLE, init }
