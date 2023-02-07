const express = require('express')
const countriesRouter = express.Router()
const countriesControllers = require('./countriesControllers')

chargeRouter.get('/countries', countriesControllers.getCountries)

module.exports = countriesRouter
