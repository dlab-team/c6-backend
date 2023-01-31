const { Model, DataTypes, UUIDV4 } = require('sequelize')

const SKILL_TYPE_TABLE = 'skill_types'

class SkillType extends Model {
  static associate(sequelize) {
    this.hasMany(sequelize.models.Skill, {
      foreignKey: 'skillTypeId',
      as: 'skills'
    })
  }
}

const SkillTypeSchema = {
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
  SkillType.init(SkillTypeSchema, {
    sequelize,
    tableName: SKILL_TYPE_TABLE,
    timestamps: false
  })
  return SkillType
}

module.exports = { SkillType, SkillTypeSchema, SKILL_TYPE_TABLE, init }
