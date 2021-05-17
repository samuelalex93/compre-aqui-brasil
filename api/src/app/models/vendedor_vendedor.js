const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendedor_vendedor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: "vendedor_vendedor_email_key"
    },
    senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: "vendedor_vendedor_cpf_key"
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ativado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
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
    cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'geo_cidade',
        key: 'id'
      }
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'geo_estado',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario_usuario',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'vendedor_vendedor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vendedor_vendedor_cidade_id_61c5e624",
        fields: [
          { name: "cidade_id" },
        ]
      },
      {
        name: "vendedor_vendedor_cpf_12dc7a80_like",
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "vendedor_vendedor_cpf_key",
        unique: true,
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "vendedor_vendedor_email_1ee368e4_like",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "vendedor_vendedor_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "vendedor_vendedor_estado_id_cbe1ee57",
        fields: [
          { name: "estado_id" },
        ]
      },
      {
        name: "vendedor_vendedor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "vendedor_vendedor_user_id_bcde8af5",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
