'use strict';

module.exports = { 
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },nome:{
        allowNull:false,
        type: Sequelize.STRING
      },email:{
        allowNull:false,
        type: Sequelize.STRING
      },senha:{
        allowNull:false,
        type: Sequelize.STRING,
        select:false
      }, createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      } 
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
};
