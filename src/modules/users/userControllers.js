const httpStatus = require('http-status')
const {
  endpointResponse,
  endpointErrorResponse
} = require('../../utils/helpers/successResponse')
const userServices = require('./userServices')


const getProfile = async (req, res, next) => {
  const { email } = req.body
  try {
    const user = await userServices.findOneUserBy({ email })
    endpointResponse({
      res,
      statusCode: httpStatus.FOUND,
      body: { user },
      message: 'El perfil del usuario fue encontrado exitosamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Hubo un problema trayendo el perfil del usuario, intentalo nuevamente',
      error
    })
  }
}

module.exports = {
    getProfile
}
