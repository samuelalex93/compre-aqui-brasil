const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_avaliacao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    avaliacao: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'anuncio_avaliacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_avaliacao_anunciante_id_e51d9514",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_avaliacao_cliente_id_990bd9cd",
        fields: [
          { name: "cliente_id" },
        ]
      },
      {
        name: "anuncio_avaliacao_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
