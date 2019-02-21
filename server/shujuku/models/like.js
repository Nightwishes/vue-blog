'use strict';
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define('like', {
    u_id: DataTypes.INTEGER,
    art_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {});
  like.associate = function(models) {
    // associations can be defined here
  };
  return like;
};