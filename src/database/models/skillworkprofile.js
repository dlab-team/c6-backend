'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class SkillWorkProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Skill, {
        foreignKey: 'skillId'
      })
    }
  }
  SkillWorkProfile.init(
    {
      skillId: {
        type: DataTypes.INTEGER,
        references: { model: 'Skills' },
        allowNull: false
      },
      workProfileId: {
        type: DataTypes.INTEGER,
        references: { model: 'WorkProfiles' },
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'SkillWorkProfile'
    }
  )
  return SkillWorkProfile
}
