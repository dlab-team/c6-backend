const httpStatus = require('http-status')

const getCities = async (req, res) => {
  try {
    // TODO: actualizar cuando el modelo exista
    const charges = {
      data: [
        {
          id: 1,
          name: 'Santiago'
        },
        {
          id: 2,
          name: 'Valparaíso'
        }
      ]
    }
    res.status(httpStatus.OK).json(charges)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener las ciudades'
    })
  }
}

module.exports = {
  getCities
}
