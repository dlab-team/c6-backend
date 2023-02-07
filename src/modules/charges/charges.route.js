const express = require('express')
const chargeRouter = express.Router()
const chargeControllers = require('./chargeControllers')

chargeRouter.get('/charges', chargeControllers.getCharges)

module.exports = chargeRouter
