"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Post_Content", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postId: {
        type: Sequelize.INTEGER,
      },
    //   postId: DataTypes.INTEGER,
    //   content: DataTypes.STRING,
    //   contentEditor: DATAS.STRING,
    //   summary: DataTypes.STRING,
      content: {
        type: Sequelize.STRING,
      },
      contentEditor: {
        type: Sequelize.STRING,
      },
      summary: {
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
    await queryInterface.dropTable("Post_Content");
  },
};
