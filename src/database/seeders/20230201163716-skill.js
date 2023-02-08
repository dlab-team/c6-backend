'use strict'

const languageSkillsNames = ['Python', 'JavaScript', 'HTML/CSS', 'Java']

const frameworkSkillsNames = ['React', 'Vue.js', 'Express.js']

const toolSkillsNames = ['Github', 'Docker', 'AWS']

const softSkillsNames = [
  'Líder',
  'Comunicación/Sociable',
  'Aprendizaje ágil/Autónomo'
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const languageSkillTypeId = 1
    const languageSkills = languageSkillsNames.map((skillName) => {
      return {
        name: skillName,
        skillTypeId: languageSkillTypeId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const frameworkSkillTypeId = 2
    const frameworkSkills = frameworkSkillsNames.map((skillName) => {
      return {
        name: skillName,
        skillTypeId: frameworkSkillTypeId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const toolsSkillTypeId = 3
    const toolsSkills = toolSkillsNames.map((skillName) => {
      return {
        name: skillName,
        skillTypeId: toolsSkillTypeId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    const softSkillTypeId = 4
    const softSkills = softSkillsNames.map((skillName) => {
      return {
        name: skillName,
        skillTypeId: softSkillTypeId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert(
      'Skills',
      [...languageSkills, ...frameworkSkills, ...toolsSkills, ...softSkills],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Skills', null, {})
  }
}
