const { body } = require('express-validator')

const postSkillReqSchema = [
  body('name').exists().isString(),
  body('skillTypeId').exists().toInt()
]

module.exports = {
  postSkillReqSchema
}
