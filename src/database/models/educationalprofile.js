'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class EducationalProfile extends Model {
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
      this.hasMany(models.Studies, {
        as: 'studies',
        foreignKey: 'educationalProfileId'
      })
    }
  }
  EducationalProfile.init(
    {
      educationalLevel: DataTypes.STRING,
      currentlyEducationalSituation: DataTypes.ENUM(
        'Bootcamp',
        'Diplomados',
        'Universidad',
        'Cursos',
        'Otros'
      ),
      englishLevel: DataTypes.ENUM('Básico', 'Intermedio', 'Avanzado'),
      anotherSkills: DataTypes.STRING,
      profileId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        references: { model: 'Profiles' }
      }
    },
    {
      sequelize,
      modelName: 'EducationalProfile'
    }
  )
  return EducationalProfile
}
