const express = require('express')
const authRouter = express.Router()
const authControllers = require('./authControllers')
const validateReqSchema = require('../../middelwares/validateReqSchema')
const { loginReqSchema, registerUserReqSchema, recoverySchema } = require('./authReqSchemas')



/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *        required:
 *          - name
 *          - email
 *          - password
 *        properties:
 *          id:
 *            type: string
 *            description: Auto-generated id
 *          name:
 *            type: string
 *            description: name
 *          email:
 *            type: string
 *            description: email
 *          password:
 *            type: string
 *            description: password
 *          example:
 *            name: "John"
 *            email: "john@email.com"
 *            password: "123456"
 */

/**
 * @openapi
 * /api/auth/register:
 *  post
 *    tags: 
 *      -register
 *    responses:
 *      200:
 *        description: OK
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
