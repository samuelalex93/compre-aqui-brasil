const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_operador', {
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
      unique: "core_operador_email_key"
    },
    cpf_cnpj: {
      type: DataTypes.STRING(14),
      allowNull: true,
      unique: "core_operador_cpf_cnpj_key"
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    permissao: {
      type: DataTypes.SMALLINT,
      allowNull: true
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
    tableName: 'core_operador',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "core_operador_cidade_id_cd6c7590",
        fields: [
          { name: "cidade_id" },
        ]
      },
      {
        name: "core_operador_cpf_cnpj_867681f0_like",
        fields: [
          { name: "cpf_cnpj" },
        ]
      },
      {
        name: "core_operador_cpf_cnpj_key",
        unique: true,
        fields: [
          { name: "cpf_cnpj" },
        ]
      },
      {
        name: "core_operador_email_e636a972_like",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "core_operador_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "core_operador_estado_id_f9341b9a",
        fields: [
          { name: "estado_id" },
        ]
      },
      {
        name: "core_operador_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "core_operador_user_id_e1bf1f44",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
