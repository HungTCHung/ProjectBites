"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Comment", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      //   postId: DataTypes.INTEGER,
      //   UserIdComment: DataTypes.INTEGER,
      //   contentComment: DataTypes.STRING,
      postId: {
        type: Sequelize.INTEGER,
      },
      userIdComment: {
        type: Sequelize.INTEGER,
      },
      contentComment: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Comment");
  },
};
