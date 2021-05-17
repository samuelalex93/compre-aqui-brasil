const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anunciante_anunciante', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plano: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(210),
      allowNull: false
    },
    cpf_cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: "anunciante_anunciante_cpf_cnpj_key"
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: "anunciante_anunciante_email_key"
    },
    nome_fantasia: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    insc_estadual: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    insc_municipal: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    nome_responsavel: {
      type: DataTypes.STRING(210),
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefone1: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    telefone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    slogan: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    palavra_chave: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    localizacao: {
      type: DataTypes.GEOGRAPHY('Point', 4326),
      allowNull: true
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    data_efetivacao: {
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
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'anunciante_categoria',
        key: 'id'
      }
    },
    cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'geo_cidade',
        key: 'id'
      }
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
    nome_usuario: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    consultor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'core_consultor',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'anunciante_anunciante',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anunciante_anunciante_categoria_id_c20e52f5",
        fields: [
          { name: "categoria_id" },
        ]
      },
      {
        name: "anunciante_anunciante_cidade_id_8c2c430f",
        fields: [
          { name: "cidade_id" },
        ]
      },
      {
        name: "anunciante_anunciante_consultor_id_8c35dd24",
        fields: [
          { name: "consultor_id" },
        ]
      },
      {
        name: "anunciante_anunciante_cpf_cnpj_0c69e82f_like",
        fields: [
          { name: "cpf_cnpj" },
        ]
      },
      {
        name: "anunciante_anunciante_cpf_cnpj_key",
        unique: true,
        fields: [
          { name: "cpf_cnpj" },
        ]
      },
      {
        name: "anunciante_anunciante_email_830db026_like",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "anunciante_anunciante_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "anunciante_anunciante_estado_id_c721f431",
        fields: [
          { name: "estado_id" },
        ]
      },
      {
        name: "anunciante_anunciante_localizacao_id",
        fields: [
          { name: "localizacao" },
        ]
      },
      {
        name: "anunciante_anunciante_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "anunciante_anunciante_user_id_810e46be",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
