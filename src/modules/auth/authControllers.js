const { createUser } = require('../users/userServices')
const { endpointResponse } = require('../../utils/helpers/successResponse')
const authServices = require('./authServices')

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body
  try {
    const user = await createUser({ name, email, password })
    endpointResponse({
      res,
      statusCode: 201,
      body: user
    })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const token = await authServices.login(email, password)
    endpointResponse({
      res,
      statusCode: 200,
      body: { token }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  registerUser,
  login
}
