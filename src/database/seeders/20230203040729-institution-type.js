'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('InstitutionTypes', [
      {
        name: 'Universidad',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Técnico o Instituto Profesional',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Educación Media',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Bootcamp',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Cursos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('InstitutionType', null, {});
    
  }
};
