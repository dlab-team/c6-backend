const httpStatus = require('http-status')
const {
  createOrUpdateFullProfile,
  findOneFullProfile
} = require('./profileServices')
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

const getFullProfile = async (req, res, next) => {
  try {
    const userId = req.user.id
    const profile = await findOneFullProfile(userId)
    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      body: { profile }
    })
  } catch (error) {
    console.log(error)
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      error
    })
  }
}

module.exports = {
  registerProfile,
  getFullProfile
}
