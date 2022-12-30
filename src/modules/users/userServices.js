const httpStatus = require('http-status')
const { User } = require('./userModel')
const { hashPassword } = require('../../utils/hashPassword')
const { ErrorObject } = require('../../utils/helpers/error')

async function createUser(newUserData) {
  const userExist = await User.findOne({ where: { email: newUserData.email } })
  if (userExist) {
    throw new ErrorObject('User email already exists', httpStatus.CONFLICT)
  }

  const passwordHash = hashPassword(newUserData.password)
  const user = await User.create({ ...newUserData, password: passwordHash })
  return user
}

module.exports = {
  createUser
}
