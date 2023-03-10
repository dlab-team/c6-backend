const express = require('express')
const skillsTypeRouter = express.Router()
const skilltypeControllers = require('./skilltypeControllers')

skillsTypeRouter.get('/skilltype', skilltypeControllers.getSkilltype)

module.exports = skillsTypeRouter
