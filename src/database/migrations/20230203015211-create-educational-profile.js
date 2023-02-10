'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EducationalProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      educationalLevel: {
        type: Sequelize.STRING
      },
      currentlyEducationalSituation: {
        type: Sequelize.ENUM(
          'Bootcamp',
          'Diplomados',
          'Universidad',
          'Cursos',
          'Otros'
        )
      },
      englishLevel: {
        type: Sequelize.ENUM('Básico', 'Intermedio', 'Avanzado')
      },
      anotherSkills: {
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
    await queryInterface.dropTable('EducationalProfiles')
  }
}
