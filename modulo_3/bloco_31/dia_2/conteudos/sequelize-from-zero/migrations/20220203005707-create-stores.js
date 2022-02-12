'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   const StoresTable = queryInterface.createTable("Stores", {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     name: {
       allowNull: false,
       type: Sequelize.STRING
     },
     description: {
       allowNull: false,
       type: Sequelize.STRING
     },
   });

   return StoresTable
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Stores");
  },
};
