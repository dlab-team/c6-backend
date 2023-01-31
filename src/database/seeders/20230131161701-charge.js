'use strict'

const { CHARGE_TABLE } = require('../../modules/workProfile/models/chargeModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      CHARGE_TABLE,
      [
        {
          id: '9b1deb4d-3b7d-3bad-9bdd-2b0d7b3dcb51',
          name: 'Desarrollador/a Full Stack'
        },
        {
          id: '9b1deb4d-3b7d-5bad-9bdd-2b0d7b3dcb52',
          name: 'Desarrollador/a Back End'
        },
        {
          id: '9b1deb4d-3b6d-5bad-9bdd-2b0d7b3dcb53',
          name: 'Desarrollador/a Front End'
        },
        {
          id: '9b2deb4d-3b6d-5bad-6bdd-2b0d7b3dcb54',
          name: 'Diseñador/a UX / UX Research o UI'
        },
        {
          id: '9b2deb4d-3b6d-3bad-6bdd-2b0d7b3dcb55',
          name: 'Desarrollador/a Móvil'
        },
        {
          id: '9b3deb4d-4b6d-3bad-6bdd-2b0d7b3dcb56',
          name: 'Data Scientist o especialista machine learning'
        },
        {
          id: '9b3deb4d-5b6d-3bad-6bdd-3b0d7b3dcb57',
          name: 'Ingeniería de Datos'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CHARGE_TABLE, null, {})
  }
}
