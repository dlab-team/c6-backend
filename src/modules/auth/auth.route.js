const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')
const nodemailer = require('nodemailer')

authRouter.post('/auth/register', authControllers.registerUser)
authRouter.post('/auth/login', authControllers.login)
authRouter.post('/auth/recovery', authControllers.recovery)

module.exports = authRouter
