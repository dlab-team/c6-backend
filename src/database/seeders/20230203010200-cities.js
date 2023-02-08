'use strict';

const ciudadesChileNames = ['Santiago', 'Concepción', 'Viña del Mar', 'Valparaiso']

const ciudadesVenezuelaNames = ['Caracas', 'Maracaibo', 'Mérida']

const ciudadesArgentinaNames = ['Buenos Aires', 'Córdoba', 'La Plata']

const ciudadesPeruNames = ['Lima', 'Arequipa', 'Cuzco']

const ciudadesColombiaNames = ['Bogotá', 'Medellín', 'Cali']


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const ciudadesChileId = 1
    const ciudadesChile = ciudadesChileNames.map((cityName) => {
      return {
        name: cityName,
        countryId: ciudadesChileId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const ciudadesVenezuelaId = 2
    const ciudadesVenezulea = ciudadesVenezuelaNames.map((cityName) => {
      return {
        name: cityName,
        countryId: ciudadesVenezuelaId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const ciudadesArgentinaId = 3
    const ciudadesArgentina = ciudadesArgentinaNames.map((cityName) => {
      return {
        name: cityName,
        countryId: ciudadesArgentinaId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const ciudadesPeruId = 4
    const ciudadesPeru = ciudadesPeruNames.map((cityName) => {
      return {
        name: cityName,
        countryId: ciudadesPeruId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const ciudadesColombiaId = 5
    const ciudadesColombia = ciudadesColombiaNames.map((cityName) => {
      return {
        name: cityName,
        countryId: ciudadesColombiaId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert(
      'Cities',
      [...ciudadesChile, ...ciudadesVenezulea, ...ciudadesArgentina, ...ciudadesPeru, ...ciudadesColombia],
      {}
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Skills', null, {})
  }
};
