const express = require('express')
const skillsRouter = express.Router()
const skillsControllers = require('./skillsControllers')
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated')
const checkAdminRole = require('../../middelwares/checkAdminRole')
const validateReqSchema = require('../../middelwares/validateReqSchema')
const { postSkillReqSchema } = require('./skillRequestSchemas')

skillsRouter.get('/skills', skillsControllers.getSkills)
skillsRouter.get('/skills/:id', skillsControllers.getSkillsByType)

skillsRouter.post(
  '/skills',
  isUserAuthenticated,
  checkAdminRole,
  validateReqSchema(postSkillReqSchema),
  skillsControllers.postSkill
)

module.exports = skillsRouter
