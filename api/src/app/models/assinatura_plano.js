const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assinatura_plano', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL,
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
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    qtd_fotos: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'assinatura_plano',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assinatura_plano_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
