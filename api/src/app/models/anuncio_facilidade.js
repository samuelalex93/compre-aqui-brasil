const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_facilidade', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(30),
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
    tableName: 'anuncio_facilidade',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_facilidade_anunciante_id_4a2c798d",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_facilidade_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
