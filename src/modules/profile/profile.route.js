const express = require('express')
const profileRouter = express.Router()
const profileControler = require('./profileControllers')
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated')

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

profileRouter.post('/profiles', profileControler.registerProfile)

profileRouter.get(
  '/profiles/me',
  isUserAuthenticated,
  profileControler.getFullProfile
)

profileRouter.get('/profiles', profileControler.readProfiles)

module.exports = profileRouter
