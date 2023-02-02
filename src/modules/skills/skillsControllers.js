const httpStatus = require('http-status')

const getSkills = async (req, res) => {
  try {
    // TODO: actualizar cuando el modelo exista
    const skills = {
      data: [
        {
          id: 1,
          name: 'Skill 1'
        },
        {
          id: 2,
          name: 'Skill 2'
        }
      ]
    }
    res.status(httpStatus.OK).json(skills)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener las habilidades'
    })
  }
}

module.exports = {
  getSkills
}
