const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_promocao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    regras: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ativa: {
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
    }
  }, {
    sequelize,
    tableName: 'anuncio_promocao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_promocao_anunciante_id_24ae2a92",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_promocao_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
