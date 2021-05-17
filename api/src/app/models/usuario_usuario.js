const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_superuser: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "usuario_usuario_username_key"
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    is_staff: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_joined: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario_usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuario_usuario_username_9e5f6fb3_like",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "usuario_usuario_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
