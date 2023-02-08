const express = require('express')
const skilltypeRouter = express.Router()
const skilltypeControllers = require('./skilltypeControllers')

skillsRouter.get('/skilltype', skilltypeControllers.getSkilltype)

module.exports = skilltypeRouter
