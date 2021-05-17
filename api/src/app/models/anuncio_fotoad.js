const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_fotoad', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING(100),
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
    tableName: 'anuncio_fotoad',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_fotoad_anunciante_id_83a2dd32",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_fotoad_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
