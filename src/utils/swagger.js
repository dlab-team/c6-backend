const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path')

//Metadata info about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Devsafio API', version: '1.0.0' }
  },
  apis: [
    `${path.join(__dirname, '../modules/auth/auth.docs.js')}`,
    `${path.join(__dirname, '../modules/users/user.docs.js')}`,
    `${path.join(__dirname, '../modules/charges/charge.docs.js')}`,
    `${path.join(__dirname, '../modules/profile/profile.docs.js')}`,
    `${path.join(__dirname, '../modules/tests/tests.docs.js')}`
    // `${path.join(__dirname, '../modules/cities/cities.docs.js')}`,
    // `${path.join(__dirname, '../modules/institutions/institutions.docs.js')}`,
    // `${path.join(__dirname, '../modules/skills/skills.docs.js')}`,
    // `${path.join(__dirname, '../modules/countries/countries.docs.js')}`,
    // `${path.join(
    //   __dirname,
    //   '../modules/institutionstype/institutionstype.docs.js'
    // )}`,
    // `${path.join(__dirname, '../modules/skilltype/skiltype.docs.js')}`
  ]
}

//Docs en JSON format
const swaggerSpec = swaggerJSDoc(options)

//Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
  console.log(
    `Version 1 Docs are available at http://localhost:${port}/api/v1/docs`
  )
}

module.exports = { swaggerDocs }
