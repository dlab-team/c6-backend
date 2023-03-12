const httpStatus = require('http-status')
const {
  endpointResponse,
  endpointErrorResponse
} = require('../../utils/helpers/successResponse')
const userServices = require('./userServices')
const getStatus = async (req, res, next) => {
  try {
    const { id } = req.user
    const fullUserData = await userServices.findOneUserBy({ id })
    const currentUser = {
      id: fullUserData.id,
      name: fullUserData.name,
      email: fullUserData.email
    }

    endpointResponse({
      res,
      statusCode: httpStatus.FOUND,
      body: currentUser,
      message: 'El estado del usuario fue encontrado exitosamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message:
        'Hubo un problema trayendo el estado del usuario, intentalo nuevamente',
      error
    })
  }
}

const getProfile = async (req, res, next) => {
  try {
    const { id } = req.user
    const fullUserData = await userServices.findOneUserBy({ id })
    const currentUser = {
      name: fullUserData.name,
      email: fullUserData.email
    }

    endpointResponse({
      res,
      statusCode: httpStatus.FOUND,
      body: currentUser,
      message: 'El perfil del usuario fue encontrado exitosamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message:
        'Hubo un problema trayendo el perfil del usuario, intentalo nuevamente',
      error
    })
  }
}

module.exports = {
  getProfile,
  getStatus
}
