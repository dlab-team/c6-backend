'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'dlab',
          email: 'dlab@gmail.com',
          password: '123456789',
          isActive: true,
          isAdmin: false,
          userState: 'Register',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'dlabAdmin',
          email: 'admin@mail.com',
          password: 'Qwerty.123$',
          isActive: true,
          isAdmin: true,
          userState: 'Register',
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
