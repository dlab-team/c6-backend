const express = require('express')
const { SkillWorkProfileController } = require('../controllers/')
const SkillWorkProfileRoute = './SkillsWorkProfile.route'

const router = express.Router()

const defaultRoutes = [
  {
    path: '/SkillWorkProfile',
    route: SkillWorkProfileRoute
  }
]

for (const route of defaultRoutes) {
  router.use(route.path, route.route)
}

router.route('/').get(SkillWorkProfileController.getSkillWorkProfile)

module.exports = router
