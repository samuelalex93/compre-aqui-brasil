const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_cliente', {
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
      unique: "cliente_cliente_email_key"
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
      unique: "cliente_cliente_cpf_key"
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
    tableName: 'cliente_cliente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cliente_cliente_cidade_id_d5ce6851",
        fields: [
          { name: "cidade_id" },
        ]
      },
      {
        name: "cliente_cliente_cpf_db5cdfc3_like",
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "cliente_cliente_cpf_key",
        unique: true,
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "cliente_cliente_email_b7108cf0_like",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "cliente_cliente_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "cliente_cliente_estado_id_42eaffec",
        fields: [
          { name: "estado_id" },
        ]
      },
      {
        name: "cliente_cliente_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cliente_cliente_user_id_79776711",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
