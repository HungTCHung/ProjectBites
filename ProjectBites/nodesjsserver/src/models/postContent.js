"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  PostContent.init(
    {
      postId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      contentEditor: DataTypes.STRING,
      summary: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PostContent",
    }
  );
  return PostContent;
};
