const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faturamento_faturapagseguro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reference: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "faturamento_faturapagseguro_reference_key"
    },
    code: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    code_transaction: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    payment_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    errors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
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
    cancellationSource: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status_pag: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    data_pagamento: {
      type: DataTypes.DATE,
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
    assinatura_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'assinatura_assinatura',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'faturamento_faturapagseguro',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "faturamento_faturapagseguro_assinatura_id_aa77ecf7",
        fields: [
          { name: "assinatura_id" },
        ]
      },
      {
        name: "faturamento_faturapagseguro_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "faturamento_faturapagseguro_reference_682a967a_like",
        fields: [
          { name: "reference" },
        ]
      },
      {
        name: "faturamento_faturapagseguro_reference_key",
        unique: true,
        fields: [
          { name: "reference" },
        ]
      },
    ]
  });
};
