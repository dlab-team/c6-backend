const httpStatus = require('http-status')
const { City } = require('../../database/models')
// const { json } = require('sequelize')

const getCities = async (req, res) => {
  try {
    const city = await City.findAll()
    res.status(httpStatus.OK).json(city)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener las ciudades'
    })
  }
}

module.exports = {
  getCities
}
