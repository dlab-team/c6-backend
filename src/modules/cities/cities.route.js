const express = require('express')
const citiesRouter = express.Router()
const citiesControllers = require('./citiesControllers')

citiesRouter.get('/cities', citiesControllers.getCities)

module.exports = citiesRouter
