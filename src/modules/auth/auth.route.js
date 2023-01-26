const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')
const validateReqSchema = require('../../middelwares/validateReqSchema')
const { loginReqSchema, registerUserReqSchema, recoverySchema } = require('./authReqSchemas')

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: ther user name
 *        email:
 *          type: string
 *          description: the user email
 *        password:
 *          type: string
 *          description: the user password
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: John
 *        email: john@email.com
 *        password: 123456
 *        
 */


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
  authControllers.recovery)
authRouter.put('/auth/changePassword', authControllers.changePassword)

module.exports = authRouter
