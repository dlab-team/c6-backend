const express = require('express')
const skillsRouter = express.Router()
const skillsControllers = require('./skillsControllers')

skillsRouter.get('/skills', skillsControllers.getSkills)

module.exports = skillsRouter
