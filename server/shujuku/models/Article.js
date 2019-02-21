'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    content: DataTypes.STRING,
    type: DataTypes.INTEGER,
    u_id: DataTypes.INTEGER,
    like_count: DataTypes.INTEGER,
    title: DataTypes.STRING,
    updatedAt: DataTypes.TIME,
    createdAt: DataTypes.TIME
  }, {
  	tableName: 'articles'
	});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.users, {
      foreignKey: "u_id"
    });
  };
  return Article;
};
