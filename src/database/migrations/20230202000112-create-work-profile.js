'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employmentSituation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cvUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      linkedinUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      githubUrl: {
        type: Sequelize.STRING
      },
      websiteUrl: {
        type: Sequelize.STRING
      },
      projectDescription: {
        type: Sequelize.TEXT
      },
      yearsOfExperiencie: {
        type: Sequelize.STRING
      },
      dreamJobDescription: {
        type: Sequelize.TEXT
      },
      availability: {
        type: Sequelize.STRING
      },
      locationAvailable: {
        type: Sequelize.STRING
      },
      workVisa: {
        type: Sequelize.STRING
      },
      profileId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: 'Profiles'
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
    await queryInterface.dropTable('WorkProfiles')
  }
}
