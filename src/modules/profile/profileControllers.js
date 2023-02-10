const httpStatus = require('http-status')
const { createOrUpdateFullProfile } = require('./profileServices')
const {
  endpointErrorResponse,
  endpointResponse
} = require('../../utils/helpers/successResponse')

const registerProfile = async (req, res, next) => {
  try {
    const profile = await createOrUpdateFullProfile({
      profileData: req.body.profile,
      workProfileData: req.body.workProfile,
      educationalProfileData: req.body.educationalProfile
    })
    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      body: { ...profile },
      message: 'Postulacion registrada correctamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Falló el registro de los datos',
      error
    })
  }
}

module.exports = {
  registerProfile
}
