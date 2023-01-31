'use strict'

const { SKILL_TABLE } = require('../../modules/workProfile/models/skillsModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const languageSkillTypeId = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb61'
    const languageSkills = [
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb11',
        name: 'Puthon',
        skill_type_id: languageSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb12',
        name: 'JavaScript',
        skill_type_id: languageSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb13',
        name: 'HTML/CSS',
        skill_type_id: languageSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb14',
        name: 'Java',
        skill_type_id: languageSkillTypeId
      }
    ]

    const frameworkSkillTypeId = '7b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb62'
    const frameworkSkills = [
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb31',
        name: 'Vue.js',
        skill_type_id: frameworkSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb32',
        name: 'React',
        skill_type_id: frameworkSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb33',
        name: 'Express.js',
        skill_type_id: frameworkSkillTypeId
      }
    ]

    const toolsSkillTypeId = '2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb63'
    const toolsSkills = [
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb21',
        name: 'Github',
        skill_type_id: toolsSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb22',
        name: 'AWS',
        skill_type_id: toolsSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb23',
        name: 'Docker',
        skill_type_id: toolsSkillTypeId
      }
    ]

    const softSkillTypeId = '2b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb64'
    const softSkills = [
      {
        id: '1b1deb4d-3b7d-4bad-4bdd-2b0d7b3dcb41',
        name: 'Líder',
        skill_type_id: softSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-6bdd-2b0d7b3dcb42',
        name: 'Comunicación/Sociable',
        skill_type_id: softSkillTypeId
      },
      {
        id: '1b1deb4d-3b7d-4bad-7bdd-2b0d7b3dcb43',
        name: 'Aprendizaje ágil/Autónomo',
        skill_type_id: softSkillTypeId
      }
    ]

    await queryInterface.bulkInsert(
      SKILL_TABLE,
      [...languageSkills, ...frameworkSkills, ...toolsSkills, ...softSkills],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(SKILL_TABLE, null, {})
  }
}
