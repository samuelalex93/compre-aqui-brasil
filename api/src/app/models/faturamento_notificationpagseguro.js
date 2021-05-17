const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamento_notificationpagseguro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    notificationCode: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    notificationType: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    notificationData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sucesso: {
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
    fat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faturamento_faturapagseguro',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'faturamento_notificationpagseguro',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "faturamento_notificationpagseguro_fat_id_cff2f15e",
        fields: [
          { name: "fat_id" },
        ]
      },
      {
        name: "faturamento_notificationpagseguro_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
