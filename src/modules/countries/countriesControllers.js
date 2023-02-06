const httpStatus = require('http-status')
const { Country } = require('../../database/models')
// const { json } = require('sequelize')

const getCountries = async (req, res) => {
  try {
    const country = await Country.findAll()
    res.status(httpStatus.OK).json(country)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener los paises'
    })
  }
}

module.exports = {
  getCountries
}
