require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')

const app = express()

const sequelize = require('./src/database/sequelize')
const authRouter = require('./src/modules/auth/auth.route')
const { ErrorObject } = require('./src/utils/helpers/error')

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

app.get('/', function (_req, res) {
  res.send({
    name: 'Devsafio API',
    environment: process.env.NODE_ENV
  })
})

app.get('/ping', function (_req, res) {
  res.send('pong')
})

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
//*This means: Run app.listen(8080) only if you are running the file
if (!module.parent) {
  sequelize
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
