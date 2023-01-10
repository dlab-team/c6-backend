const httpStatus = require('http-status')
const { createUser } = require('../users/userServices')
const {
  endpointResponse,
  endpointErrorResponse
} = require('../../utils/helpers/successResponse')
const authServices = require('./authServices')

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body
  try {
    await createUser({ name, email, password })
    endpointResponse({
      res,
      statusCode: httpStatus.CREATED,
      message: 'El registro se completo de manera exitosa'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Hubo un problema en el registro, intentalo nuevamente',
      error
    })
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const token = await authServices.login(email, password)
    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      body: { token },
      message: 'Autenticación exitosa'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.UNAUTHORIZED,
      message: 'Fallo la Autenticación',
      error
    })
  }
}

const recovery = async (req, res, next) => {
  const { email } = req.body
  try {
    const token = await authServices.sendToken(email)
    endpointResponse({
      res,
      statusCode: 200,
      body: { token }
    })
  } catch (error) {
    next(error)
  }
}

const changePassword = async (req, res, next) => {
  const { password, confirmPassword, token } = req.body

  if (password !== confirmPassword) {
    endpointErrorResponse({
      res,
      statusCode: 201,
      message: 'Las contraseñas no coinciden'
    })
  }

  try {
    await authServices.newPassword(password, token)
    endpointResponse({
      res,
      statusCode: 201,
      message: 'Contraseña actualizada exitosamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: 201,
      message: 'Ocurrio un problema actualizando la contraseña',
      error
    })
  }
}

module.exports = {
  registerUser,
  login,
  recovery,
  changePassword
}
