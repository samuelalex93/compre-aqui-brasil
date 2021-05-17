const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assinatura_assinatura', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qtd_mensalidade: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL,
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
    meio_pagamento: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    data_cancelamento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    motivo_cancelamento: {
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
    sucesso: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cortesia: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    anunciante_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'anunciante_anunciante',
        key: 'id'
      }
    },
    plano_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'assinatura_plano',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'assinatura_assinatura',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assinatura_assinatura_anunciante_id_9a879a34",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "assinatura_assinatura_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "assinatura_assinatura_plano_id_e80a4b31",
        fields: [
          { name: "plano_id" },
        ]
      },
    ]
  });
};
