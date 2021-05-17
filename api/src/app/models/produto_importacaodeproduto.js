const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_importacaodeproduto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    arquivo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    processado: {
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
    tableName: 'produto_importacaodeproduto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_importacaodeproduto_anunciante_id_a815dce8",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "produto_importacaodeproduto_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
