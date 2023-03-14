'use strict'
require('dotenv').config()
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const passHashUser = bcrypt.hashSync(process.env.PASS_USER_SEED, salt)
const passHashAdmin = bcrypt.hashSync(process.env.PASS_ADMIN_SEED, salt)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'dlab',
          email: 'dlab@gmail.com',
          password: passHashUser,
          isActive: true,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'dlabAdmin',
          email: 'admin@mail.com',
          password: passHashAdmin,
          isActive: true,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
