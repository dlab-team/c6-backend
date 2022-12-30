const { ErrorObject } = require('../utils/helpers/error')
const { verifyJWT } = require('../utils/jwt')

const getTokenFromRequest = (request) => {
  const authorization = request.headers['authorization']
  const token = authorization ? authorization.substring(7) : null
  return token
}
const httpUnauthorizedError = new ErrorObject('Unauthorized', 401)

const isUserAuthenticated = (req, res, next) => {
  try {
    const token = getTokenFromRequest(req)
    const user = verifyJWT(token)
    if (user.id) {
      req.user = user
      return next()
    }

    next(httpUnauthorizedError)
  } catch (err) {
    next(httpUnauthorizedError)
  }
}

module.exports = isUserAuthenticated
