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

module.exports = {
  endpointResponse
}
