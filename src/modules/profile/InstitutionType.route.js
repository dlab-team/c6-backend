const express = require('express')
const InstitutionTypeRouter = express.Router()
const InstitutionTypeControllers = require('../Controllers')

InstitutionTypeRouter.get(
  '/InstitutionType',
  InstitutionTypeControllers.getInstitutionType
)

module.exports = InstitutionTypeRouter
