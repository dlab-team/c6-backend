const express = require('express')
const skillsRouter = express.Router()
const skillsControllers = require('./skillsControllers')

skillsRouter.get('/skills', skillsControllers.getSkills)
skillsRouter.get('/skills/:id', skillsControllers.getSkillsByType)

module.exports = skillsRouter
