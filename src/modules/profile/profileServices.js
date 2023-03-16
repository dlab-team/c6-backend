const {
  User,
  Profile,
  EducationalProfile,
  WorkProfileCharges,
  SkillWorkProfile,
  WorkProfile,
  Studies
} = require('../../database/models')

async function createOrUpdateFullProfile({
  profileData,
  workProfileData,
  educationalProfileData
}) {
  let user = await User.findOne({ where: { email: profileData.email } })
  if (!user) {
    user = await User.create({
      name: profileData.fullName,
      email: profileData.email,
      password: null,
      isActive: false,
      isAdmin: false
    })
  }

  const [profile, isProfileCreated] = await Profile.findOrCreate({
    defaults: { ...profileData },
    where: { userId: user.id }
  })
  if (!isProfileCreated) {
    await profile.update({ ...profileData })
  }

  const [educationalProfile] = await EducationalProfile.upsert({
    ...educationalProfileData,
    profileId: profile.id
  })

  const [workProfile] = await WorkProfile.upsert({
    ...workProfileData,
    profileId: profile.id
  })

  if (!isProfileCreated) {
    await WorkProfileCharges.destroy({
      where: { workProfileId: workProfile.id }
    })
    await SkillWorkProfile.destroy({
      where: { workProfileId: workProfile.id }
    })
    await Studies.destroy({
      where: { educationalProfileId: educationalProfile.id }
    })
  }
  const studiesEducationalProfile = educationalProfileData.studies.map(
    (study) => {
      return {
        ...study,
        educationalProfileId: educationalProfile.id
      }
    }
  )
  await Studies.bulkCreate(studiesEducationalProfile, {
    include: ['institution']
  })

  const workProfileCharges = workProfileData.charges.map((chargeId) => {
    return { chargeId, workProfileId: workProfile.id }
  })
  const workProfileSkills = workProfileData.skills.map((skill) => {
    return {
      ...skill,
      workProfileId: workProfile.id
    }
  })
  await WorkProfileCharges.bulkCreate(workProfileCharges)
  await SkillWorkProfile.bulkCreate(workProfileSkills)

  return { profile, workProfile, educationalProfile }
}

async function findOneFullProfile(userId) {
  const profile = await Profile.findOne({
    where: { userId },
    include: [
      {
        association: 'workProfile',
        include: ['charges', 'skills']
      },
      {
        association: 'educationalProfile',
        include: [
          {
            association: 'studies',
            include: [
              {
                association: 'institution',
                include: ['institutionType']
              }
            ]
          }
        ]
      }
    ]
  })

  return profile
}

async function updateProfilePersonal(userId, data) {
  if (data.email) {
    await User.update({ email: data.email }, { where: { id: userId } })
  }
  await Profile.update(data, { where: { userId } })
}

async function allProfiles() {
  const user = await Profile.findAll({
    attributes: ['fullName', 'phone', 'gender', 'cityId', 'userId'],
    include: [
      {
        association: 'user',
        attributes: ['email', 'isAdmin']
      },
      {
        association: 'city',
        attributes: ['countryId', 'name'],
        include: {
          association: 'country',
          attributes: ['name']
        }
      },
      {
        association: 'educationalProfile',
        attributes: ['id'],
        include: [
          {
            association: 'studies',
            attributes: ['name', 'institutionId'],
            include: [
              {
                association: 'institution',
                attributes: ['name', 'institutionTypeId'],
                include: {
                  association: 'institutionType',
                  attributes: ['name']
                }
              }
            ]
          }
        ]
      },
      {
        association: 'workProfile',
        attributes: ['id']
      }
    ]
  })

  const skills = await SkillWorkProfile.findAll({
    attributes: ['skillId', 'workProfileId', 'level'],
    include: {
      association: 'Skill',
      attributes: ['name', 'skillTypeId'],
      include: {
        association: 'skillType',
        attributes: ['name']
      }
    }
  })

  console.log(
    '🚀 ~ file: profileServices.js:134 ~ allProfiles ~ skills:',
    skills
  )

  if (!user || !skills) {
    throw new ErrorObject('User not found', httpStatus.NOT_FOUND)
  }
  const profile = {
    user: user,
    skills: skills
  }
  return profile
}

module.exports = {
  createOrUpdateFullProfile,
  updateProfilePersonal,
  findOneFullProfile,
  allProfiles
}
