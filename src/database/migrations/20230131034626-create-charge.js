'use strict'

const {
  CHARGE_TABLE,
  ChargeSchema
} = require('../../modules/workProfile/models/chargeModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(CHARGE_TABLE, ChargeSchema)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(CHARGE_TABLE)
  }
}
