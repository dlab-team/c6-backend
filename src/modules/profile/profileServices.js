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
        include: [{ association: 'studies', include: ['institution'] }]
      }
    ]
  })

  return profile
}

module.exports = {
  createOrUpdateFullProfile,
  findOneFullProfile
}
