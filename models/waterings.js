"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class waterings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      waterings.belongsTo(models.plants, { foreignKey: "plantId" });
    }
  }
  waterings.init(
    {
      date: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "waterings"
    }
  );
  return waterings;
};
