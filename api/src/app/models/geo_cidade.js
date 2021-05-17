const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_cidade', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'geo_estado',
        key: 'id'
      }
    },
    slug: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "geo_cidade_slug_key"
    }
  }, {
    sequelize,
    tableName: 'geo_cidade',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "geo_cidade_estado_id_3cf9798a",
        fields: [
          { name: "estado_id" },
        ]
      },
      {
        name: "geo_cidade_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "geo_cidade_slug_986be068_like",
        fields: [
          { name: "slug" },
        ]
      },
      {
        name: "geo_cidade_slug_key",
        unique: true,
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
