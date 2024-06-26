"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Post.init(
    {
      peopleInvolvePost: DataTypes.INTEGER,
      groupid: DataTypes.INTEGER,
      // image: DataTypes.STRING,
      topic: DataTypes.STRING,
      hashtags: DataTypes.STRING,
      
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
