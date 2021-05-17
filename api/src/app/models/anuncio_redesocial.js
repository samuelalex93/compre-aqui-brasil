const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_redesocial', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    facebook: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    whatsapp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    skype: {
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
      },
      unique: "anuncio_redesocial_anunciante_id_key"
    }
  }, {
    sequelize,
    tableName: 'anuncio_redesocial',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_redesocial_anunciante_id_key",
        unique: true,
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_redesocial_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
