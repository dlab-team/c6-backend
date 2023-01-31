'use strict'

const {
  SKILL_TYPE_TABLE
} = require('../../modules/workProfile/models/skillTypeModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      SKILL_TYPE_TABLE,
      [
        {
          id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb61',
          name: 'Language'
        },
        {
          id: '7b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb62',
          name: 'bases or frameworks'
        },
        {
          id: '2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb63',
          name: 'tools'
        },
        {
          id: '2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb64',
          name: 'soft-skills'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(SKILL_TYPE_TABLE, {}, {})
  }
}