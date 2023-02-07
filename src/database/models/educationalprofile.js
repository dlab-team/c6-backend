'use strict';
const { Model } = require('sequelize');
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
        foreignKey: "profileId",
        as: 'profile'
      })
      this.belongsToMany(models.Institution, {
        through: models.Studies,
        foreignKey: 'educationalProfileId',
        otherKey: 'institutionId',
        as: 'studies'
      })
    }
  }
  EducationalProfile.init({
    educationalLevel: DataTypes.STRING,
    currentlyEducationalSituation: DataTypes.ENUM,
    englishLevel: DataTypes.ENUM,
    anotherSkills: DataTypes.STRING,
    profile_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      references: { model: 'Profiles' }
    }
  }, {
    sequelize,
    modelName: 'EducationalProfile',
  });
  return EducationalProfile;
};