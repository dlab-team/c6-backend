const httpStatus = require('http-status')
const { SkillType } = require('../../database/models')
// const { json } = require('sequelize')

const getSkilltype = async (req, res) => {
  try {
    const skilltype = await SkillType.findAll()
    res.status(httpStatus.OK).json(skilltype)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener el tipo de habilidades'
    })
  }
}

module.exports = {
  getSkilltype
}
