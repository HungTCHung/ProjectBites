"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Post", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      //   authorId: DataTypes.INTEGER,
      //   image: DataTypes.STRING,
      //   content: DataTypes.STRING,
      //   hastag: DataTypes.STRING,
      peopleInvolvePost: {
        type: Sequelize.INTEGER,
      },
      groupid: {
        type: Sequelize.INTEGER,
      },

      image: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      // sex: DataTypes.STRING,
      // phone: DataTypes.STRING,
      // groupId: DataTypes.INTEGER,
      content: {
        type: Sequelize.STRING,
      },
      hastag: {
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
    await queryInterface.dropTable("Post");
  },
};
