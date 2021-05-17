const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_paletadecor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paleta: {
      type: DataTypes.STRING(20),
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
      },
      unique: "anuncio_paletadecor_anunciante_id_key"
    }
  }, {
    sequelize,
    tableName: 'anuncio_paletadecor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_paletadecor_anunciante_id_key",
        unique: true,
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_paletadecor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
