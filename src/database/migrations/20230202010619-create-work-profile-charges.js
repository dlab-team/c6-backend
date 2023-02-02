'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfileCharges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workProfileId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'WorkProfiles'
        }
      },
      chargeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Charges'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorkProfileCharges')
  }
}
