const express = require('express')
const StudiesRouter = express.Router()
const StudiesControllers = require('../Controllers')

WorkProfileChargesRouter.get('/Studies', StudiesControllers.getStudies)

module.exports = StudiesRouter
