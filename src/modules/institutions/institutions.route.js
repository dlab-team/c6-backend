const express = require('express')
const institutionsRouter = express.Router()
const institutionsControllers = require('./institutionsControllers')

institutionsRouter.get('/institutions', institutionsControllers.getInstitutions)

module.exports = institutionsRouter
