const { Model, DataTypes, UUIDV4 } = require('sequelize')
const { SKILL_TYPE_TABLE } = require('./skillTypeModel')

const SKILL_TABLE = 'skills'

const SkillSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  skillTypeId: {
    field: 'skill_type_id',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: SKILL_TYPE_TABLE
    }
  }
}

class Skill extends Model {
  static associate(sequelize) {
    this.belongsTo(sequelize.models.SkillType, {
      foreignKey: 'skillTypeId',
      as: 'skillType'
    })
    this.belongsToMany(sequelize.models.WorkProfile, {
      through: sequelize.models.SkillWorkProfile,
      foreignKey: 'skillId',
      otherKey: 'workProfileId'
    })
  }
}

function init(sequelize) {
  Skill.init(SkillSchema, {
    sequelize,
    tableName: SKILL_TABLE,
    timestamps: false
  })
  return Skill
}

module.exports = { Skill, SkillSchema, SKILL_TABLE, init }
