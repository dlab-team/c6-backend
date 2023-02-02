const httpStatus = require('http-status')

const getInstitutions = async (req, res) => {
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
      message: 'Error al obtener las instituciones'
    })
  }
}

module.exports = {
  getInstitutions
}
