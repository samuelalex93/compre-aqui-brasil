const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_voucher', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    desconto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    data_validade: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    utilizado: {
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
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente_cliente',
        key: 'id'
      }
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produto_produto',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_voucher',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_voucher_cliente_id_d59aeb03",
        fields: [
          { name: "cliente_id" },
        ]
      },
      {
        name: "produto_voucher_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "produto_voucher_produto_id_261fd612",
        fields: [
          { name: "produto_id" },
        ]
      },
    ]
  });
};
