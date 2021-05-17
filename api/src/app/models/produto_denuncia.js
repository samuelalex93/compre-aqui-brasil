const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_denuncia', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    motivo: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    solucao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    resolvido: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    data_cadastro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_alteracao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produto_produto',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_denuncia',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_denuncia_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "produto_denuncia_produto_id_2217bf8d",
        fields: [
          { name: "produto_id" },
        ]
      },
    ]
  });
};
