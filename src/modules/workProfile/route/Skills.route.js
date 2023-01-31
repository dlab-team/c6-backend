const express = require('express')
const { SkillsController } = require('../controllers/')
const SkillsRoute = './Skills.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/Skills',
    route: SkillsRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

router.route('/').get(SkillsController.getSkills)

module.exports = router
