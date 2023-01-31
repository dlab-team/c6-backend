const { Charges } = require('../models/')

const getCharges = async () => {
  try {
    return await Charges.findAll()
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getCharges
}

module.exports.ChargesServices = require('./Charges.services')
