"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Replice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Replice.init(
    {
      commentRootId: DataTypes.INTEGER,
      userIdReplice: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Replice",
    }
  );
  return Replice;
};
