const { Model, DataTypes, UUIDV4 } = require('sequelize')
const { Skill } = require('./skillsModel')
const { WorkProfile, WORK_PROFILE_TABLE } = require('./workProfileModel')

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
      model: Skill
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
  static associate() {
    //this.belongsTo(SkillType)
  }
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
  init
}
