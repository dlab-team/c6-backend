const { Studies } = require('../../database/models')

async function updateProfileStudies(educationalProfileId, studiesData) {
  await Studies.destroy({
    where: { educationalProfileId }
  })

  const studies = studiesData.map((study) => {
    return {
      ...study,
      educationalProfileId
    }
  })

  await Studies.bulkCreate(studies)
}

module.exports = {
  updateProfileStudies
}
