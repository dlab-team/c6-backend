'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.SkillType, {
        foreignKey: 'skillTypeId',
        as: 'skillType'
      })
      this.hasMany(models.PivoteSkillsTest, {
        foreignKey: 'skillsId',
        as: 'pivoteSkillsTest'
      })
      this.hasMany(models.SkillWorkProfile, {
        foreignKey: 'skillsId',
        as: 'skill.WorkProfile'
      })
    }
  }
  Skill.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      skillTypeId: {
        type: DataTypes.INTEGER,
        references: { model: 'SkillTypes' },
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Skill'
    }
  )
  return Skill
}
