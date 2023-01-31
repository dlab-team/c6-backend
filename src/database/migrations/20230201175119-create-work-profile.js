'use strict'

const { CHARGE_TABLE } = require('../../modules/workProfile/models/chargeModel')
const {
  WORK_PROFILE_TABLE,
  WorkProfileSchema
} = require('../../modules/workProfile/models/workProfileModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { DataTypes } = Sequelize
    await queryInterface.createTable(WORK_PROFILE_TABLE, WorkProfileSchema)
    await queryInterface.createTable('work_profile_charges', {
      id: DataTypes.UUID,
      charge_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: CHARGE_TABLE
        }
      },
      work_profile_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: WORK_PROFILE_TABLE
        }
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('work_profile_charges')
    await queryInterface.dropTable(WORK_PROFILE_TABLE)
  }
}
