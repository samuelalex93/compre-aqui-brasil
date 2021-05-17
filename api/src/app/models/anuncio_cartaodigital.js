const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_cartaodigital', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'anuncio_cartaodigital',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_cartaodigital_anunciante_id_6fc03787",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_cartaodigital_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
