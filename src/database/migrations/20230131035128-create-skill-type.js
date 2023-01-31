'use strict'

const {
  SKILL_TYPE_TABLE,
  SkillTypeSchema
} = require('../../modules/workProfile/models/skillTypeModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(SKILL_TYPE_TABLE, SkillTypeSchema)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(SKILL_TYPE_TABLE)
  }
}
