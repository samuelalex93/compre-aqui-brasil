const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_videoyoutube', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    video: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    youtube: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    aprovado: {
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
      },
      unique: "anuncio_videoyoutube_anunciante_id_key"
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'anuncio_videoyoutube',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_videoyoutube_anunciante_id_key",
        unique: true,
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_videoyoutube_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
