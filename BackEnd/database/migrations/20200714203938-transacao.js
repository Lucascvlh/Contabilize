'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('transacao', {
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type: Sequelize.BIGINT
      }, descricao:{
        allowNull:false,
        type: Sequelize.STRING,
      }, valor:{
        allowNull:false,
        type: Sequelize.FLOAT
      }, tipo_receita:{
        allowNull:false,
        type: Sequelize.STRING
      }, id_nome:{
        type: Sequelize.BIGINT,
        references:{
          model:'user',
          key: 'id'
        }
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
    return queryInterface.dropTable('transacao')
  }
};
