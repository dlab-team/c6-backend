const endpointResponse = ({
  res,
  status = true,
  statusCode = 200,
  message = 'success',
  body
}) => {
  res.status(statusCode).json({
    status,
    statusCode,
    message,
    body
  })
}

const endpointErrorResponse = ({
  res,
  statusCode = 500,
  message = 'Error',
  error = {}
}) => {
  const errorMessage = error.statusCode
    ? error.message
    : 'Internal server error'

  res.status(statusCode).json({
    status: false,
    statusCode,
    message,
    errorMessage
  })
}

module.exports = {
  endpointResponse,
  endpointErrorResponse
}
