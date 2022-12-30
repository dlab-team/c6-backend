const { comparePassword } = require('../../utils/hashPassword')
const { ErrorObject } = require('../../utils/helpers/error')
const { findOneUserBy } = require('../users/userServices')
const { createJWT } = require('../../utils/jwt')

async function login(email, password) {
  const user = await findOneUserBy({ email })
  const isCorrectPassword = comparePassword(password, user.password)
  if (!isCorrectPassword) {
    throw new ErrorObject('email or password invalid', 401)
  }
  const token = createJWT({ id: user.id, name: user.name })
  return token
}

module.exports = {
  login
}
