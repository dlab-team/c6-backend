'use strict'

const {
  WORK_PROFILE_TABLE,
  WorkProfileSchema
} = require('../../modules/workProfile/models/workProfileModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(WORK_PROFILE_TABLE, WorkProfileSchema)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('work_profile_charges')
    await queryInterface.dropTable(WORK_PROFILE_TABLE)
  }
}
