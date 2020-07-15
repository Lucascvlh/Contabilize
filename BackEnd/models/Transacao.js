module.exports = (sequelize, DataTypes) => {
  const Transacao = sequelize.define('Transacao', {
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    tipo_receita: DataTypes.STRING,
  }, {
    tableName: "transacao"
  });

  return Transacao;
}