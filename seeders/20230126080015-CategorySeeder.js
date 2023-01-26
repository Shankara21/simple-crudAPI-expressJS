"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Komik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Novel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Majalah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dongeng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
