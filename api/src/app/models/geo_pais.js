const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_pais', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    sigla: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'geo_pais',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "geo_pais_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
