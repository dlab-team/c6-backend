const { comparePassword } = require('../../utils/hashPassword')
const { ErrorObject } = require('../../utils/helpers/error')
const { findOneUserBy } = require('../users/userServices')
const { createJWT, verifyJWT } = require('../../utils/jwt')
const { hashPassword } = require('../../utils/hashPassword')
const { emailForgotPassword } = require('../../utils/email')

async function login(email, password) {
  const user = await findOneUserBy({ email })
  const isCorrectPassword = comparePassword(password, user.password)
  if (!isCorrectPassword) {
    throw new ErrorObject('email or password invalid', 401)
  }
  const token = createJWT({ id: user.id, name: user.name })
  return token
}

async function sendToken(email) {
  const user = await findOneUserBy({ email })

  if (!user) {
    throw new ErrorObject('user not found', 401)
  }

  const token = createJWT({ id: user.id, name: user.name })
  await emailForgotPassword({ email, name: user.name }, token)

  return token
}

async function newPassword(password, token) {
  const userData = await verifyJWT(token)
  const user = await findOneUserBy({ id: userData.id })

  const newPassword = hashPassword(password)
  user.password = newPassword
  user.save()

  return user
}

module.exports = {
  login,
  sendToken,
  newPassword
}
