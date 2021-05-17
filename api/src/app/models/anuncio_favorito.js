const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_favorito', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ativo: {
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
      allowNull: false,
      references: {
        model: 'cliente_cliente',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'anuncio_favorito',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_favorito_anunciante_id_6895e43d",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_favorito_cliente_id_aee035f4",
        fields: [
          { name: "cliente_id" },
        ]
      },
      {
        name: "anuncio_favorito_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
