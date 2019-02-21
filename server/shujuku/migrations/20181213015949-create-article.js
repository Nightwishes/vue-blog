'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING,
				allowNull: false,
      },
      u_id: {
        type: Sequelize.INTEGER,
				allowNull: false
      },
      like_count: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
				allowNull: false
      },
			comment_count: {
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
				tableName: 'articles',
				charset: 'utf8mb4',
				collate: 'utf8mb4_bin'
			}
			).then(() => {
				 return queryInterface.addIndex('articles', {
					name:'u_id',
					fields: ['u_id']
				});
		});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles');
  }
};
