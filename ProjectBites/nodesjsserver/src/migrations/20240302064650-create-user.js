"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // email: DataTypes.STRING,
      // password: DataTypes.STRING,
      // username: DataTypes.STRING,
      // address: DataTypes.STRING,
      // phone: DataTypes.STRING,
      // sex: DataTypes.STRING,
      // image: DataTypes.STRING,
      // biography: DataTypes.STRING,
      // groupId: DataTypes.INTEGER,
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },

      username: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },

      image: {
        type: Sequelize.STRING,
      },
      biography: {
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
    await queryInterface.dropTable("User");
  },
};
