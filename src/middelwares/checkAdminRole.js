const { endpointErrorResponse } = require('../utils/helpers/successResponse')

function checkAdminRole(req, res, next) {
  const userAuth = req.user
  if (!userAuth.isAdmin) {
    return endpointErrorResponse({
      res,
      message: 'No tiene permisos de administrador',
      statusCode: 401
    })
  }

  next()
}

module.exports = checkAdminRole
