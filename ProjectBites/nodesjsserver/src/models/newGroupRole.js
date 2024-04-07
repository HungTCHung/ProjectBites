"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class newGroupRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  newGroupRole.init(
    {
      groupId: DataTypes.STRING,
      roleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "newGroupRole",
    }
  );
  return newGroupRole;
};
