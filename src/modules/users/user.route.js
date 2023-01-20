const express = require('express')
const userRouter = express.Router()
const userControllers = require('./userControllers')

userRouter.get('/user/profile', userControllers.getProfile);

module.exports = userRouter