const express = require('express')
const profileRouter = express.Router()
const profileControler = require('./profileControllers')
const { getProfile } = require('./profileServices')

profileRouter.post('/profiles', profileControler.registerProfile)

module.exports = profileRouter
