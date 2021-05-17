const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_estado', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    sigla: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pais_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'geo_pais',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'geo_estado',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "geo_estado_pais_id_ebea3a77",
        fields: [
          { name: "pais_id" },
        ]
      },
      {
        name: "geo_estado_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
