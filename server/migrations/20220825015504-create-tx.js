'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Txes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blockNumber: {
        type: Sequelize.INTEGER
      },
      transactionHash: {
        type: Sequelize.STRING
      },
      to: {
        type: Sequelize.STRING
      },
      memo: {
        type: Sequelize.STRING
      },
      didId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Txes');
  }
};