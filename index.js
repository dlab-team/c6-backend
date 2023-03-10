require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')

const app = express()

const db = require('./src/database/models/index')
const authRouter = require('./src/modules/auth/auth.route')
const userRouter = require('./src/modules/users/user.route')
const chargesRouter = require('./src/modules/charges/charges.route')
const citiesRouter = require('./src/modules/cities/cities.route')
const countriesRouter = require('./src/modules/countries/countries.route')
const institutionstype = require('./src/modules/institutionstype/institutionstype.route')
const institutions = require('./src/modules/institutions/institutions.route')
const skills = require('./src/modules/skills/skills.route')
const profileRouter = require('./src/modules/profile/profile.route')
const testsRouter = require('./src/modules/tests/tests.route')
const skillTypeRouter = require('./src/modules/skillType/skillType.route')


const { ErrorObject } = require('./src/utils/helpers/error')
const { swaggerDocs } = require('./src/utils/swagger')

// cors config
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: 'Content-Type,Authorization'
}

// middleware para las cookies
app.use(
  cookieSession({
    name: 'session',
    keys: 'clave',
    // opciones de las cookies
    maxAge: 24 * 60 * 60 * 1000 // duracion de 24 horas
  })
)

app.use(cors(corsOptions))

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', chargesRouter)
app.use('/api', countriesRouter)
app.use('/api', citiesRouter)
app.use('/api', institutionstype)
app.use('/api', institutions)
app.use('/api', skills)
app.use('/api', profileRouter)
app.use('/api', testsRouter)
app.use('/api', skillTypeRouter)

app.get('/', function (_req, res) {
  res.send({
    name: 'Devsafio API',
    environment: process.env.NODE_ENV
  })
})

app.get('/ping', function (_req, res) {
  res.send('pong')
})

//swagger
swaggerDocs(app, process.env.PORT)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new ErrorObject('endpoint not found', 404))
})

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode)
  res.json({ statusCode, status: false, message: err.message })
})

/* istanbul ignore if */
// *This means: Run app.listen(8080) only if you are running the file
if (!module.parent) {
  db.sequelize
    .authenticate()
    .then(() => {
      console.log('Successful database connection')
      const server = app.listen(process.env.PORT, function () {
        const port = server.address().port
        console.log('Example app listening at http://localhost:%s', port)
      })
    })
    .catch((error) => {
      console.log('Error in connection to database', error)
    })
}

module.exports = app
