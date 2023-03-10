const { SkillWorkProfile, WorkProfile } = require('../../database/models')

async function updateWorkProfile(workProfileId, data) {
  await WorkProfile.update(data, { where: { id: workProfileId } })
}

async function updateWorkProfileSkills(workProfileId, skillsData) {
  await SkillWorkProfile.destroy({
    where: { workProfileId }
  })

  const workProfileSkills = skillsData.map((skill) => {
    return {
      ...skill,
      workProfileId
    }
  })
  await SkillWorkProfile.bulkCreate(workProfileSkills)
}

module.exports = {
  updateWorkProfileSkills,
  updateWorkProfile
}
