const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_descricao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'anuncio_descricao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_descricao_anunciante_id_94e6533b",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_descricao_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
