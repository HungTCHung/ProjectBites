"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Like", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      //   targetlikeId: DataTypes.INTEGER,
      //   likeWhat: DataTypes.STRING,
      //   sourceLikeId: DataTypes.INTEGER,
      //   likeType: DataTypes.STRING,
      targetlikeId: {
        type: Sequelize.INTEGER,
      },
      likeWhat: {
        type: Sequelize.STRING,
      },
      sourceLikeId: {
        type: Sequelize.INTEGER,
      },
      likeType: {
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
    await queryInterface.dropTable("Like");
  },
};
