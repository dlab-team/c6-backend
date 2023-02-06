const httpStatus = require('http-status')
const { Charge } = require('../../database/models')
// const { json } = require('sequelize')

const getCharges = async (req, res) => {
  try {
    const charges = await Charge.findAll()
    res.status(httpStatus.OK).json(charges)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener los cargos'
    })
  }
}

module.exports = {
  getCharges
}
