const express = require('express')
const userRouter = express.Router()
const userControllers = require('./userControllers')
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated')

userRouter.get('/user/profile', isUserAuthenticated, userControllers.getProfile)

module.exports = userRouter
