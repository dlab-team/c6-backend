const express = require('express')
const { SkillTypeController } = require('../controllers/')
const SkillTypeRoute = './Skills.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/SkillType',
    route: SkillTypeRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

router.route('/').get(SkillTypeController.getSkillType)

module.exports = router
