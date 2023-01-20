const { validationResult } = require('express-validator')

const validateReqSchema = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    res.status(400).json({
      status: false,
      statusCode: 400,
      message: 'Datos invalidos',
      errors: errors.mapped()
    })
  }
}

module.exports = validateReqSchema
