"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "plants",
      [
        {
          name: "Cactus",
          image: "https://live.staticflickr.com/232/482160626_3715a558d2_b.jpg",
          interval: 7
        },
        {
          name: "Sunflower",
          image:
            "https://live.staticflickr.com/6070/6101744035_2566341f3c_b.jpg",
          interval: 2
        },
        {
          name: "Tulip",
          image: "https://live.staticflickr.com/224/495138412_f8603e1bf2_b.jpg",
          interval: 1
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("plants", null, {});
  }
};
