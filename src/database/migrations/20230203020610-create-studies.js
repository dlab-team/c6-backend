'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Studies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      educationalProfileId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EducationalProfiles'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      institutionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Institutions'
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Studies');
  }
};