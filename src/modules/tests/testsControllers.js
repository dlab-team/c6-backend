const httpStatus = require('http-status')
const { Test } = require('../../database/models')

const getTests = async (req, res) => {
  try {
    const { isAdmin } = req.user
    console.log(req.user)
    if (isAdmin === true) {
    const tests = await Test.findAll({
      attributes: ['name', 'url', 'imagenUrl', 'descripcion', 'deleted'],
    })
    res.status(httpStatus.OK).json(tests)
  } else {
    const tests = await Test.findAll({
      attributes: ['name', 'url', 'imagenUrl', 'descripcion', 'deleted'],
      where: {
        deleted: false
      }
    })
    res.status(httpStatus.OK).json(tests)
  }
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener los Tests'
    })
  }
}

const getTestsById = async (req, res) => {
  try {
    const test = await Test.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['name', 'url', 'imagenUrl', 'descripcion', 'deleted']
    })
    res.status(httpStatus.OK).json(test)
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener el Test'
    })
  }
}

const postTest = async (req, res) => {
  try {
    const testExist = await Test.findOne({ where: { name: req.body.name } })
    if (testExist) {
      throw new ErrorObject('El Test enviado ya existe', httpStatus.CONFLICT)
    }
    const test = await Test.create({
      name: req.body.name,
      url: req.body.url,
      imagenUrl: req.body.imagenUrl,
      descripcion: req.body.descripcion,
    })
    res.status(httpStatus.OK).json({
      message: 'El Test se ha creado de forma correcta'
    })
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al crear nuevo Test'
    })
  }
}

const updateTestDeleted = async (req, res) => {
  try {
    const testDeleted = await Test.findOne({ where: { id: req.params.id } })
    if (!req.body.name) {
      if (testDeleted.deleted === false) {
        await Test.update({
          deleted: true
        }, {
          where: {
            id: req.params.id
          }
        })
        return res.status(httpStatus.OK).json({
          message: 'El Test se ha eliminado de forma correcta'
        })
      } else {
        await Test.update({
          deleted: false
        }, {
          where: {
            id: req.params.id
          }
        })
        return res.status(httpStatus.OK).json({
          message: 'El Test se ha habilitado de forma correcta'
        })
      }
    } else {
      await Test.update({
        name: req.body.name,
        url: req.body.url,
        imagenUrl: req.body.imagenUrl,
        descripcion: req.body.descripcion,
      }, {
        where: {
          id: req.params.id
        }
      })
      return res.status(httpStatus.OK).json({
        message: 'El Test se ha modificado correctamente'
      })
    }
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al borrar el Test',
      error: error
    })
  }
}

module.exports = {
  getTests,
  getTestsById,
  postTest,
  updateTestDeleted
}