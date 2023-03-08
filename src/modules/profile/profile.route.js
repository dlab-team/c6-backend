const express = require('express')
const profileRouter = express.Router()
const profileControler = require('./profileControllers')
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated')
const { getProfile } = require('./profileServices')

profileRouter.post('/profiles', profileControler.registerProfile)

profileRouter.put(
  '/profiles/personal',
  isUserAuthenticated,
  profileControler.putProfilePersonal
)

profileRouter.put(
  '/profiles/skills',
  isUserAuthenticated,
  profileControler.putWorkProfileSkills
)

profileRouter.put(
  '/profiles/studies',
  isUserAuthenticated,
  profileControler.putProfileStudies
)

profileRouter.put(
  '/profiles/experiencie',
  isUserAuthenticated,
  profileControler.putWorkProfileExperiencie
)

module.exports = profileRouter
