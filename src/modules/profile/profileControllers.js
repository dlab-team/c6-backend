const httpStatus = require('http-status')
const {
  endpointErrorResponse,
  endpointResponse
} = require('../../utils/helpers/successResponse')
const {
  Profile,
  WorkProfile,
  EducationalProfile
} = require('../../database/models')
const {
  createOrUpdateFullProfile,
  updateProfilePersonal
} = require('./profileServices')
const {
  updateWorkProfileSkills,
  updateWorkProfile
} = require('./workProfileServices')
const { updateProfileStudies } = require('./educationalProfileServices')

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

const putProfilePersonal = async (req, res, next) => {
  try {
    await updateProfilePersonal(req.user.id, { ...req.body })
    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      message: 'Datos actualizados correctamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Falló la actualizacion de los datos',
      error
    })
  }
}

const putWorkProfileSkills = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ where: { userId: req.user.id } })
    const workProfile = await WorkProfile.findOne({
      where: { profileId: profile.id }
    })
    await updateWorkProfileSkills(workProfile.id, req.body.skills)

    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      body: {},
      message: 'Datos actualizados correctamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Falló la actualizacion de los datos',
      error
    })
  }
}

const putProfileStudies = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ where: { userId: req.user.id } })
    const educationalProfile = await EducationalProfile.findOne({
      where: { profileId: profile.id }
    })
    await updateProfileStudies(educationalProfile.id, req.body.studies)

    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      message: 'Datos actualizados correctamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Falló la actualizacion de los datos',
      error
    })
  }
}

const putWorkProfileExperiencie = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ where: { userId: req.user.id } })
    const workProfile = await WorkProfile.findOne({
      where: { profileId: profile.id }
    })
    await updateWorkProfile(workProfile.id, { ...req.body })

    endpointResponse({
      res,
      statusCode: httpStatus.OK,
      message: 'Datos actualizados correctamente'
    })
  } catch (error) {
    endpointErrorResponse({
      res,
      statusCode: httpStatus.BAD_REQUEST,
      message: 'Falló la actualizacion de los datos',
      error
    })
  }
}

module.exports = {
  registerProfile,
  putWorkProfileSkills,
  putProfileStudies,
  putWorkProfileExperiencie,
  putProfilePersonal
}
