const express = require('express')
const skillTypeRouter = express.Router()
const skilltypeControllers = require('./skilltypeControllers')

skillTypeRouter.get('/skilltype', skilltypeControllers.getSkilltype)

module.exports = skillTypeRouter
