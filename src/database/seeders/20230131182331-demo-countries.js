'use strict';

//const { COUNTRY_TABLE } = require('../../modules/cities/countryModel')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('countries', 
      [
        {
          id: '01',
          name: 'Chile',
        },
        {
          id: '02',
          name: 'Venezuela',
        },
        {
          id: '03',
          name: 'Argentina',
        },
        {
          id: '04',
          name: 'Perú',
        },
        {
          id: '05',
          name: 'Colombia',
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

  //Add commands to revert seed here.
  await queryInterface.bulkDelete('countries', null, {});

  }
};
