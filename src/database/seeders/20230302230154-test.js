'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Tests', [{
      name: 'Python',
      url: 'https://www.prueba_python.cl',
      imagenUrl: 'https://miro.medium.com/max/256/1*ztqS5rRI29GHxZa6uPF2UA.png',
      descripcion: 'Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Python',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Html/Css',
      url: 'https://www.prueba_html_css.cl',
      imagenUrl: 'https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png',
      descripcion: 'Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en HTML/CSS',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Javascript',
      url: 'https://www.prueba_javascript.cl',
      imagenUrl: 'https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png',
      descripcion: 'Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Javascript',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()      
    },{
      name: 'Android',
      url: 'https://www.prueba_android.cl',
      imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
      descripcion: 'Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Android',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Azure DevOps',
      url: 'https://www.prueba_azure_devops.cl',
      imagenUrl: 'https://zeevector.com/wp-content/uploads/Microsoft-Azure-DevOps-logo.png',
      descripcion: 'Esta prueba consiste en distintos ejercicios de variada dificultad que mediran tus habilidades en Azure DevOps',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Tests', null, {});
  }
};
