'use strict'

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
      'Institutions',
      [
        {
          name: 'Universidade Uno',
          institutionTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Universidade Dos',
          institutionTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Universidade Tres',
          institutionTypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
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
    await queryInterface.bulkDelete('Institutions', null, {})
  }
}
