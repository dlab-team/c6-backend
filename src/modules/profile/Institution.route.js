const express = require('express')
const InstitutionRouter = express.Router()
const InstitutionControllers = require('../Controllers')

InstitutionRouter.get('/Institution', InstitutionControllers.getInstitution)

module.exports = InstitutionRouter
