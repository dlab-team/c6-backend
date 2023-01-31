'use strict'

const {
  SKILL_WORK_PROFILE_TABLE,
  SkillWorkProfileSchema
} = require('../../modules/workProfile/models/skillsWorkProfileModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      SKILL_WORK_PROFILE_TABLE,
      SkillWorkProfileSchema
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(SKILL_WORK_PROFILE_TABLE)
  }
}
