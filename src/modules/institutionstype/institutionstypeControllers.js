const httpStatus = require('http-status')
const { InstitutionType } = require('../../database/models')

const getInstitutionstype = async (req, res) => {
  try {
    const institutions = await InstitutionType.findAll()
    res.status(httpStatus.OK).json(institutions)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener el tipo de instituciones'
    })
  }
}

module.exports = {
  getInstitutionstype
}
