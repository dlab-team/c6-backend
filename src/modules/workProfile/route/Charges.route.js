const express = require('express')
const { ChargesController } = require('../controllers/')
const ChargesRoute = './Charges.route'

const chargeRouter = express.Router()

const defaultRoutes = [
  {
    path: '/Charges',
    route: ChargesRoute
  }
]

defaultRoutes.forEach((route) => {
  chargeRouter.use(route.path, route.route)
})

chargeRouter.route('/').get(ChargesController.getCharges)

module.exports = router
