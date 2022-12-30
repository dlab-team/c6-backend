const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')

authRouter.post('/auth/register', authControllers.registerUser)
authRouter.post('/auth/login', authControllers.login)

module.exports = authRouter
