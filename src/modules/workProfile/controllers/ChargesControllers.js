const httpStatus = require('http-status')
const { wrapperAsync } = require('../middlewares/async-wrapper')
const { ChargesServices } = require('../services')

const getCharges = wrapperAsync(async (req, res) => {
  const Charges = await ChargesServices.getCharges()
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Charges obtained',
    data: Charges
  })
})

module.exports = {
  getCharges
}

module.exports.ChargesControllers = require('./Charges.controllers')
