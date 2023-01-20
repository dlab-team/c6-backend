const { verifyJWT } = require('../utils/jwt')
const { endpointErrorResponse } = require('../utils/helpers/successResponse')

const getTokenFromRequest = (request) => {
  const authorization = request.headers['authorization']
  const token = authorization ? authorization.substring(7) : null
  return token
}

const isUserAuthenticated = (req, res, next) => {
  try {
    const token = getTokenFromRequest(req)
    const user = verifyJWT(token)
    if (user.id) {
      req.user = user
      return next()
    }

    endpointErrorResponse({
      res,
      message: 'Usuario no autenticado',
      statusCode: 401
    })
  } catch (err) {
    endpointErrorResponse({
      res,
      message: 'Usuario no autenticado',
      statusCode: 401
    })
  }
}

module.exports = isUserAuthenticated
