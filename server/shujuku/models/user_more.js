'use strict';
module.exports = (sequelize, Sequelize) => {
  const user_more = sequelize.define('user_more', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    u_id: {
      allowNull: false,
      type: Sequelize.STRING(20)
      // ,
      // references: {
      //   model: models.users,
      //   key: 'id'
      // }
    },
    tel: {
      allowNull: false,
      type: Sequelize.STRING(12)
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
    table: 'user_more'
  });
  user_more.associate = function(models) {
    // associations can be defined here
    user_more.belongsTo(models.users, {
      foreignKey: "u_id"
    })
  };
  return user_more;
};