const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_contato', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    assunto: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mensagem: {
      type: DataTypes.TEXT,
      allowNull: false
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
    anunciante_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'anunciante_anunciante',
        key: 'id'
      }
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente_cliente',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'anuncio_contato',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_contato_anunciante_id_46547686",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_contato_cliente_id_6be2f231",
        fields: [
          { name: "cliente_id" },
        ]
      },
      {
        name: "anuncio_contato_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
