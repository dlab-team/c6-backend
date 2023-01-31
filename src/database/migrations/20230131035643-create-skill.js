'use strict'

const {
  SkillSchema,
  SKILL_TABLE
} = require('../../modules/workProfile/models/skillsModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(SKILL_TABLE, SkillSchema)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(SKILL_TABLE)
  }
}
