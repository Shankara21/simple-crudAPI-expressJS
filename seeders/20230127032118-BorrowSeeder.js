"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("borrows", [
      {
        userId: 1,
        bookId: 2,
        date: new Date(),
        lamaPinjam: 3,
        description: "Dipinjam untuk dibaca",
        status: "dipinjam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 5,
        date: new Date(),
        lamaPinjam: 2,
        description: "Dipinjam untuk dibaca",
        status: "dipinjam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 9,
        date: new Date(),
        lamaPinjam: 4,
        description: "Dipinjam untuk dibaca",
        status: "dipinjam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 7,
        date: new Date(),
        lamaPinjam: 4,
        description: "Dipinjam untuk dibaca",
        status: "dipinjam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 10,
        date: new Date(),
        lamaPinjam: 5,
        description: "Dipinjam untuk dibaca",
        status: "dipinjam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        bookId: 8,
        date: new Date(),
        lamaPinjam: 3,
        description: "Dipinjam untuk dibaca",
        status: "dipinjam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("borrows", null, {});
  },
};
