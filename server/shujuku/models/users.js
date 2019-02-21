'use strict';
module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define('users', {
    id: {
    	allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			type: Sequelize.INTEGER
		},
		username: {
    	allowNull: false,
			type: Sequelize.STRING(20)
		},
		password: {
    	allowNull: false,
			type: Sequelize.STRING(20)
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
  	tableName: 'users'
	});
  users.associate = function(models) {
    // associations can be defined here
		// hasMany 一对多的关系
		users.hasMany(models.Article, {
			foreignKey: "u_id"
    });
    users.hasOne(models.user_more, {
      foreignKey: "u_id"
    })
  };
  return users;
};
