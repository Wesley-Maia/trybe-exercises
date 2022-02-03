'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Stores", [
      {
        name: "Magazine",
        description: "Loja que tem eletros."
      },
      {
        name: "Tem de Tudo",
        description: "Pode vir que aqui tem tudo."
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    queryInterface.bulkDelete("Stores", null, {});
  }
};
