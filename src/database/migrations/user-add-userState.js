'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'userState', {
        type: Sequelize.ENUM('Register', 'Job Ready'),
        allowNull: false,
        defaultValue: 'Register'
    })
  },
  async down(queryInterface, Sequelize) {}
};