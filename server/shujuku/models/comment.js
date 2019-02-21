'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    u_id: DataTypes.INTEGER,
    art_id: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};