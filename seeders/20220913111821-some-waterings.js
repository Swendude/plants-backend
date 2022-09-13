"use strict";
const moment = require("moment");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "waterings",
      [
        {
          date: moment().subtract(14, "days").toDate(),
          plantId: 1
        },
        {
          date: moment().subtract(7, "days").toDate(),
          plantId: 1
        },
        {
          date: moment().subtract(1, "days").toDate(),
          plantId: 2
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("waterings", null, {});
  }
};
