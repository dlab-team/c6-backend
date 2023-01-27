const { Model, DataTypes, UUIDV4 } = require('sequelize')

const WORK_PROFILE_TABLE = 'work_pofiles'

class WorkProfile extends Model {
  static associate(sequelize) {
    this.belongsToMany(sequelize.models.Skill, {
      through: sequelize.models.SkillWorkProfile,
      foreignKey: 'workProfileId',
      otherKey: 'skillId'
    })

    this.belongsToMany(sequelize.models.Charge, {
      through: 'work_profile_charges',
      foreignKey: 'work_profile_id',
      otherKey: 'charge_id'
    })
  }
}

const WorkProfileSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  employmentSituation: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cvUrl: {
    field: 'cv_url',
    allowNull: false,
    type: DataTypes.STRING
  },
  linkedinUrl: {
    field: 'linkedin_url',
    allowNull: false,
    type: DataTypes.STRING
  },
  githubUrl: {
    field: 'github_url',
    type: DataTypes.STRING
  },
  websiteUrl: {
    field: 'website_url',
    type: DataTypes.STRING
  },
  projectDescription: {
    field: 'project_description',
    type: DataTypes.TEXT
  },
  ///verifica acaaa
  // creo deberia ser relacion a muchos con tabla soft skills
  softSkills: {
    field: 'soft_skills',
    type: DataTypes.STRING
  },
  /// verifica
  yearsOfExperiencie: {
    field: 'years_of_experiencie',
    type: DataTypes.STRING
  },
  dreamJobDescription: {
    field: 'dream_job_description',
    type: DataTypes.TEXT
  },
  availability: {
    type: DataTypes.STRING
  },
  locationAvailable: {
    field: 'location_available',
    type: DataTypes.STRING
  },
  workVisa: {
    field: 'work_visa',
    type: DataTypes.STRING
  },

  profileId: {
    //ref
    type: DataTypes.STRING
  }
}

function init(sequelize) {
  WorkProfile.init(WorkProfileSchema, {
    sequelize,
    tableName: WORK_PROFILE_TABLE,
    timestamps: false
  })
  return WorkProfile
}

module.exports = { WorkProfile, WorkProfileSchema, WORK_PROFILE_TABLE, init }
