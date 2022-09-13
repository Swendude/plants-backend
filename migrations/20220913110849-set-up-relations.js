"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("waterings", "plantId", {
      type: Sequelize.INTEGER,
      references: {
        model: "plants",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("waterings", "plantId");
  }
};
