const express = require('express')
const profileRouter = express.Router()
const profileControler = require('./profileControllers')
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated')

profileRouter.post('/profiles', profileControler.registerProfile)

profileRouter.get(
  '/profiles/me',
  isUserAuthenticated,
  profileControler.getFullProfile
)

module.exports = profileRouter
