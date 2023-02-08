const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')
const validateReqSchema = require('../../middelwares/validateReqSchema')
const {
  loginReqSchema,
  registerUserReqSchema,
  recoverySchema,
  changePasswordSchema
} = require('./authReqSchemas')

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
authRouter.post(
  '/auth/recovery',
  validateReqSchema(recoverySchema),
  authControllers.recovery
)
authRouter.put(
  '/auth/changePassword',
  validateReqSchema(changePasswordSchema),
  authControllers.changePassword
)

module.exports = authRouter
