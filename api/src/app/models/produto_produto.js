const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_produto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preco_varejo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    preco_atacado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    preco_cnpj: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ativo: {
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
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    desconto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    qtd_voucher: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    voucher: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    data_validade_voucher: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tem_foto: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nome_busca: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tem_preco_atacado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tem_preco_cnpj: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    youtube: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produto_produto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_produto_anunciante_id_124040f0",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "produto_produto_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
