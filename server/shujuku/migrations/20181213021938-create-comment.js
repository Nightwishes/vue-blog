'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_id: {
        type: Sequelize.INTEGER,
      	allowNull: false
			},
      art_id: {
        type: Sequelize.INTEGER,
				allowNull: false
      },
      content: {
        type: Sequelize.STRING,
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
    }, {
    	tableName: 'comments',
			charset: 'utf8mb4',
			collate: 'utf8mb4_bin'
			}
    ).then(() => {
    	return queryInterface.addIndex('comments', {
				name: 'u_id',
				fields: ['u_id']
			}).then(() => {
				return queryInterface.addIndex('comments', {
					name: 'art_id',
					fields: ['art_id']
				})
			})
		})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};
