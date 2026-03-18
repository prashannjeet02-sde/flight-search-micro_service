"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airports", [
      {
        name: "Raja Bhoj International Airport",
        address: "Gandhi Nagar,Bhopal",
        city_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dumna Airport",
        address: "Dumna,Jabalpur",
        city_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chattrapati Shivaji International Terminus",
        address: "Andheri,Mumbai",
        city_id: "10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Navi Mumbai Domestic Airport",
        address: "Navi Mumbai",
        city_id: "10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
