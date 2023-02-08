const httpStatus = require('http-status')
const { Institution } = require('../../database/models')

const getInstitutions = async (req, res) => {
  try {
    // TODO: actualizar cuando el modelo exista
    const institutions = await Institution.findAll()
    res.status(httpStatus.OK).json(institutions)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener las instituciones'
    })
  }
}

module.exports = {
  getInstitutions
}
