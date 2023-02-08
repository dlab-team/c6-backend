const { body } = require('express-validator')

const passwordValidations = body('password', 'confirmPassword')
  .exists()
  .isString()
  .isLength({ min: 6 })
  .withMessage('El password deberia ser de minimo 6 caracteres')

const emailValidations = body('email').exists().isEmail()

const tokenValidations = body('token').exists().isString()

const loginReqSchema = [emailValidations, passwordValidations]

const registerUserReqSchema = [
  body('name').exists().isString(),
  emailValidations,
  passwordValidations
]

const recoverySchema = [emailValidations]

const changePasswordSchema = [passwordValidations, passwordValidations, tokenValidations]

module.exports = {
  loginReqSchema,
  registerUserReqSchema,
  recoverySchema,
  changePasswordSchema
}
