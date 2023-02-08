'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WorkProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Profile, {
        foreignKey: 'profileId',
        as: 'profile'
      })
      this.belongsToMany(models.Charge, {
        through: models.WorkProfileCharges,
        foreignKey: 'workProfileId',
        otherKey: 'chargeId',
        as: 'charges'
      })
      this.belongsToMany(models.Skill, {
        through: models.SkillWorkProfile,
        foreignKey: 'workProfileId',
        otherKey: 'skillId',
        as: 'skills'
      })
    }
  }
  WorkProfile.init(
    {
      employmentSituation: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cvUrl: {
        allowNull: false,
        type: DataTypes.STRING
      },
      linkedinUrl: {
        allowNull: false,
        type: DataTypes.STRING
      },
      githubUrl: DataTypes.STRING,
      websiteUrl: DataTypes.STRING,
      projectDescription: DataTypes.TEXT,
      yearsOfExperiencie: DataTypes.STRING,
      dreamJobDescription: DataTypes.TEXT,
      availability: DataTypes.STRING,
      locationAvailable: DataTypes.STRING,
      workVisa: DataTypes.STRING,
      profileId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        references: { model: 'Profiles' }
      }
    },
    {
      sequelize,
      modelName: 'WorkProfile'
    }
  )
  return WorkProfile
}
