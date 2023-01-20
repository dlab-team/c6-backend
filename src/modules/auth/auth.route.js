const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')
const validateReqSchema = require('../../middelwares/validateReqSchema')
const { loginReqSchema, registerUserReqSchema } = require('./authReqSchemas')

authRouter.post(
  '/auth/register',
  validateReqSchema(registerUserReqSchema),
  authControllers.registerUser
)
authRouter.post(
  '/auth/login',
  validateReqSchema(loginReqSchema),
  authControllers.login
)

module.exports = authRouter
