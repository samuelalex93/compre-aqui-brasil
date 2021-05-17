const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_usuario_user_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario_usuario',
        key: 'id'
      },
      unique: "usuario_usuario_user_per_usuario_id_permission_id_c0a85055_uniq"
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      },
      unique: "usuario_usuario_user_per_usuario_id_permission_id_c0a85055_uniq"
    }
  }, {
    sequelize,
    tableName: 'usuario_usuario_user_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_usuario_user_per_usuario_id_permission_id_c0a85055_uniq",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "permission_id" },
        ]
      },
      {
        name: "usuario_usuario_user_permissions_permission_id_5cad0a4b",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "usuario_usuario_user_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuario_usuario_user_permissions_usuario_id_5969a193",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
};
