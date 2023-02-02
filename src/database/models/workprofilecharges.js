'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WorkProfileCharges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkProfileCharges.init(
    {
      workProfileId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'WorkProfiles'
        },
        allowNull: false
      },
      chargeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Charges'
        },
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'WorkProfileCharges'
    }
  )
  return WorkProfileCharges
}
