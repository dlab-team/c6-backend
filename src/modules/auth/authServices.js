const httpsStatus = require('http-status')
const { comparePassword } = require('../../utils/hashPassword')
const { ErrorObject } = require('../../utils/helpers/error')
const { findOneUserBy } = require('../users/userServices')
const { createJWT } = require('../../utils/jwt')

async function login(email, password) {
  const user = await findOneUserBy({ email })
  const isCorrectPassword = comparePassword(password, user.password)
  if (!isCorrectPassword) {
    throw new ErrorObject(httpsStatus.UNAUTHORIZED)
  }
  const token = createJWT({ id: user.id, name: user.name })
  return token
}

const recoveryPassword = async (req, res) => {
  try {
    const { email } = req.body

    const user = await userService.getUserByEmail(email)

    if (!user) {
      const error = new Error('User not found!')
      return res.status(httpStatus.NOT_FOUND).json({ msg: error.message })
    }
    const expiresIn = 60 * 60

    user.token = createToken({ id: user._id, email: user.email }, expiresIn)

    await userService.saveUser(user)

    // send email
    const { email: _email, name, token } = user

    emailForgotPassword({ _email, name, token })
    console.log(_email)

    res
      .status(httpStatus.OK)
      .json({
        msg: 'Se ha enviado un correo electrónico de confirmación a su correo electrónico.'
      })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}
const verifyPassword = async (req, res) => {
  try {
    const { token } = req.params
    const email = decodeToken(token)
    const user = await userService.getUserByEmail(email)

    if (!token) {
      const error = new Error('No tienes los permisos necesarios')
      res.status(httpStatus.FORBIDDEN).json({ msg: '', errors: error.message })
    }
    if (!user) {
      const error = new Error('Usuario no Encontrado!')
      return res.status(httpStatus.NOT_FOUND).json({ msg: error.message })
    }

    res.status(httpStatus.OK).json({ msg: 'la contraseña ha sido verificada' })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}
const createPassword = async (req, res) => {
  try {
    const { token } = req.params
    const { password } = req.body
    const email = decodeToken(token)
    const user = await userService.getUserByEmail(email)

    if (!token) {
      const error = new Error('No tienes los permisos necesarios')
      res.status(httpStatus.FORBIDDEN).json({ msg: '', errors: error.message })
    }
    if (!user) {
      const error = new Error('Usuario no Encontrado!')
      return res.status(httpStatus.NOT_FOUND).json({ msg: error.message })
    }
    // TODO: define or not a new password validation method
    user.password = password
    user.token = null

    await userService.saveUser(user)

    res
      .status(httpStatus.OK)
      .json({ msg: 'Se ha creado una nueva contraseña con éxito', data: user })
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      msg: error.mesagge
    })
  }
}

module.exports = {
  login,
  createPassword,
  verifyPassword,
  recoveryPassword
}
