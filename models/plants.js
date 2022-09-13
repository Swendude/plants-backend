"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class plants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      plants.hasMany(models.waterings, { foreignKey: "plantId" });
    }
  }
  plants.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
      interval: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      sequelize,
      modelName: "plants"
    }
  );
  return plants;
};
