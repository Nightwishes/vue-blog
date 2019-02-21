'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('likes',
			{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_id: {
        type: Sequelize.INTEGER,
				allowNull: false,
      },
      art_id: {
        type: Sequelize.INTEGER
      },
      comment_id: {
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
    },
			{
				tableName: 'like',
				charset: 'utf8mb4',
				collate: 'utf8mb4_bin'
			}
			).then(() => {
				 return queryInterface.addIndex('likes', {
					name: 'u_id',
					fields: ['u_id']
				}).then(() => {
					return queryInterface.addIndex('likes', {
						name: 'art_id',
						fields: ['art_id']
					}).then(() => {
						return queryInterface.addIndex('likes', {
							name: 'comment_id',
							fields: ['comment_id']
						})
					})
				})
		})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('likess');
  }
};
