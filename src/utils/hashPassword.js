const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

function hashPassword(password) {
  const hashPassword = bcrypt.hashSync(password, salt)
  return hashPassword
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash)
}

module.exports = {
  hashPassword,
  comparePassword
}
