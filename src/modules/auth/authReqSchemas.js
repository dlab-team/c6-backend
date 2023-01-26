const { body } = require('express-validator')

const passwordValidations = body('password')
  .exists()
  .isString()
  .isLength({ min: 6 })
  .withMessage('El password deberia ser de minimo 6 caracteres')

const emailValidations = body('email').exists().isEmail()

const loginReqSchema = [emailValidations, passwordValidations]

const registerUserReqSchema = [
  body('name').exists().isString(),
  emailValidations,
  passwordValidations
]

const recoverySchema = [emailValidations]

module.exports = {
  loginReqSchema,
  registerUserReqSchema,
  recoverySchema
}
