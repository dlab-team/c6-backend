const glob = require('glob')

function setupModels(sequelize) {
  const dir = __dirname.split(`\\`).join('/')
  const modelsPaths = glob.sync(dir + '/../modules/**/*Model.js*')

  const models = []
  modelsPaths.forEach((routeModel) => {
    const { init } = require(routeModel)
    const model = init(sequelize)
    models.push(model)
  })

  models.forEach((model) => {
    if (model.associate) {
      model.associate(sequelize)
    }
  })
}

module.exports = setupModels
