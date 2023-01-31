const { Model, DataTypes, UUIDV4 } = require('sequelize')
const { Skill, SKILL_TABLE } = require('./skillsModel')
const { WORK_PROFILE_TABLE } = require('./workProfileModel')

const SKILL_WORK_PROFILE_TABLE = 'work_profiles_skills'

const SkillWorkProfileSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  skillId: {
    field: 'skill_id',
    type: DataTypes.UUID,
    references: {
      model: SKILL_TABLE
    }
  },
  workProfileId: {
    field: 'work_profile_id',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: WORK_PROFILE_TABLE
    }
  },
  level: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class SkillWorkProfile extends Model {
  static associate() {}
}

function init(sequelize) {
  SkillWorkProfile.init(SkillWorkProfileSchema, {
    sequelize,
    tableName: SKILL_WORK_PROFILE_TABLE,
    timestamps: false
  })
  return SkillWorkProfile
}

module.exports = {
  SkillWorkProfile,
  SkillWorkProfileSchema,
  SKILL_WORK_PROFILE_TABLE,
  init
}
