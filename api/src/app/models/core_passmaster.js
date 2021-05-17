const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_passmaster', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    senha: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    obs: {
      type: DataTypes.TEXT,
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
    tableName: 'core_passmaster',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "core_passmaster_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
