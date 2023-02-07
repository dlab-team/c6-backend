const httpStatus = require('http-status')

const getInstitutionstype = async (req, res) => {
  try {
    // TODO: actualizar cuando el modelo exista
    const institutions = {
      data: [
        {
          id: 1,
          name: 'Institución 1'
        },
        {
          id: 2,
          name: 'Institución 2'
        }
      ]
    }
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
