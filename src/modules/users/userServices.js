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
async function findOneUserBy({ id, email }) {
  const where = id ? { id } : { email }
  const user = await User.findOne({
    where
  })
  if (!user) {
    throw new ErrorObject('User not found', httpStatus.NOT_FOUND)
  }
  return user
}

module.exports = {
  createUser,
  findOneUserBy
}
