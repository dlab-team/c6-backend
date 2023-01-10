const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET_KEY = process.env.SECRET || 'default_jwtsecret'

const createJWT = (payload) => {
  const signOptions = {
    algorithm: 'HS512',
    expiresIn: '7d'
  }

  return jwt.sign(payload, JWT_SECRET_KEY, signOptions)
}

const verifyJWT = (token) => {
  return jwt.verify(token, JWT_SECRET_KEY)
}

module.exports = {
  createJWT,
  verifyJWT
}
