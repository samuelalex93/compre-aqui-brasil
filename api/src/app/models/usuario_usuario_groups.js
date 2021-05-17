const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_usuario_groups', {
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
      unique: "usuario_usuario_groups_usuario_id_group_id_a4cfb0b8_uniq"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      },
      unique: "usuario_usuario_groups_usuario_id_group_id_a4cfb0b8_uniq"
    }
  }, {
    sequelize,
    tableName: 'usuario_usuario_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_usuario_groups_group_id_b9c090f8",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "usuario_usuario_groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuario_usuario_groups_usuario_id_62de76a1",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "usuario_usuario_groups_usuario_id_group_id_a4cfb0b8_uniq",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "group_id" },
        ]
      },
    ]
  });
};
