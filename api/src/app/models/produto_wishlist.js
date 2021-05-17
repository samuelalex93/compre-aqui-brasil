const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_wishlist', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deletado: {
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
    tableName: 'produto_wishlist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_wishlist_cliente_id_af2bb6a7",
        fields: [
          { name: "cliente_id" },
        ]
      },
      {
        name: "produto_wishlist_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "produto_wishlist_produto_id_548238ed",
        fields: [
          { name: "produto_id" },
        ]
      },
    ]
  });
};
