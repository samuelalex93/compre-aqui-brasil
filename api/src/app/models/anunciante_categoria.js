const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anunciante_categoria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "anunciante_categoria_slug_key"
    },
    font_icon: {
      type: DataTypes.STRING(150),
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
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'anunciante_categoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anunciante_categoria_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "anunciante_categoria_slug_70d255aa_like",
        fields: [
          { name: "slug" },
        ]
      },
      {
        name: "anunciante_categoria_slug_key",
        unique: true,
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
