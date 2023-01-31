const express = require('express')
const WorkProfileChargesRouter = express.Router()
const WorkProfileChargesControllers = require('./userControllers')

WorkProfileChargesRouter.get(
  '/workProfile/WorkProfileCharges',
  WorkProfileChargesControllers.getWorkProfileCharges
)

module.exports = WorkProfileChargesRouter
