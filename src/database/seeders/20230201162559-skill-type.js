'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SkillTypes',
      [
        {
          id: 1,
          name: 'Lenguaje',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Bases o frameworks',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Herramientas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Habilidades blandas',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SkillTypes', null, {})
  }
}
