const httpStatus = require('http-status')
const { Skill } = require('../../database/models')

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

const postSkill = async (req, res) => {
  try {
    const newSkill = req.body
    await Skill.create(newSkill)
    res.status(httpStatus.OK).json({ message: 'Guardado exitosamente' })
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al crear la habilidad'
    })
  }
}

module.exports = {
  getSkills,
  getSkillsByType,
  postSkill
}
