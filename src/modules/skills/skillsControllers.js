const httpStatus = require('http-status')
const { Skill } = require('../../database/models')
// const { json } = require('sequelize')

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll()
    res.status(httpStatus.OK).json(skills)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener las habilidades'
    })
  }
}

const getSkillsByType = async (req, res) => {
  try {
    const skills = await Skill.findAll({
      where: {
        skillTypeId: req.params.id
      }
    })
    res.status(httpStatus.OK).json(skills)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener las habilidades'
    })
  }
}

module.exports = {
  getSkills,
  getSkillsByType
}
