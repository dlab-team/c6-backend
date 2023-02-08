const express = require('express')
const institutionstypeRouter = express.Router()
const institutionstypeControllers = require('./institutionstypeControllers')

institutionstypeRouter.get(
  '/institutionstype',
  institutionstypeControllers.getInstitutionstype
)

module.exports = institutionstypeRouter
