const { comparePassword } = require('../../utils/hashPassword')
const { ErrorObject } = require('../../utils/helpers/error')
const { findOneUserBy, findUserByToken } = require('../users/userServices')
const { createJWT } = require('../../utils/jwt')
const { hashPassword } = require('../../utils/hashPassword')

async function login(email, password) {
  const user = await findOneUserBy({ email })
  const isCorrectPassword = comparePassword(password, user.password)
  if (!isCorrectPassword) {
    throw new ErrorObject('email or password invalid', 401)
  }
  const token = createJWT({ id: user.id, name: user.name })
  return token
}

async function newPassword(password, token) {
  const user =  await findUserByToken({ token })
  if (!user) {
    throw new ErrorObject('user not found', 401)
  }
  const passwordHash = hashPassword(password)
  user.password = passwordHash;
  return user
}

module.exports = {
  login,
  newPassword
}
