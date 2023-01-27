'use strict'
const Sequelize = require('sequelize')
const setupModels = require('./setupModels')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config
  }
)

setupModels(sequelize)

module.exports = sequelize
