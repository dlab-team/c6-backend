const httpStatus = require('http-status')
const {
  endpointResponse,
  endpointErrorResponse
} = require('../../utils/helpers/successResponse')
const userServices = require('./userServices')
const { wrapperAsync } = require('../middlewares/async-wrapper')

const getProfile = async (req, res, next) => {
  try {
    const getProfiles = wrapperAsync(async (req, res) => {
      getProfiles = await userServices.getProfiles()
      res
        .status(httpStatus.FOUND)
        .json({ success: true, message: 'user obtained', data: getProfiles })

      const getProfile = wrapperAsync(async (req, res) => {
        const { id } = req.params
        console.log(id)
        const user = await userServices.getProfile({ id })

        res
          .status(httpStatus.FOUND)
          .json({ success: true, message: 'user obtained', data: usuario })
      })
    })
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
      message:
        'Hubo un problema trayendo el perfil del usuario, intentalo nuevamente',
      error
    })
  }
}

module.exports = {
  getProfile,
  getProfiles,
  user
}
