'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_mores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      u_id: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      tel: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      tableName: 'user_more',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_mores');
  }
};