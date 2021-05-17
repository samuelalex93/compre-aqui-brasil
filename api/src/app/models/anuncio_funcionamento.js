const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anuncio_funcionamento', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dia: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    abre: {
      type: DataTypes.TIME,
      allowNull: true
    },
    fecha: {
      type: DataTypes.TIME,
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
    anunciante_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'anunciante_anunciante',
        key: 'id'
      }
    },
    fechado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'anuncio_funcionamento',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "anuncio_funcionamento_anunciante_id_d487cfe2",
        fields: [
          { name: "anunciante_id" },
        ]
      },
      {
        name: "anuncio_funcionamento_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
