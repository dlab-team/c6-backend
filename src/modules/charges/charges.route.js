const express = require('express')
const chargesRouter = express.Router()
const chargesControllers = require('./chargesControllers')

chargesRouter.get('/charges', chargesControllers.getCharges)

module.exports = chargesRouter
