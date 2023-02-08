const express = require('express')
const countriesRouter = express.Router()
const countriesControllers = require('./countriesControllers')

countriesRouter.get('/countries', countriesControllers.getCountries)

module.exports = countriesRouter
