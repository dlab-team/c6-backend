const express = require('express')
const userRouter = express.Router()
const userControllers = require('./userControllers')
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated')

userRouter.post('/user/status', isUserAuthenticated, userControllers.getStatus)

module.exports = userRouter
