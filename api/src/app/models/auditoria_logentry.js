const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditoria_logentry', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    object_pk: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    object_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    object_repr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    action: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    changes: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    remote_addr: {
      type: "INET",
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    additional_data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario_usuario',
        key: 'id'
      }
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'auditoria_logentry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auditoria_logentry_actor_id_8a4218c4",
        fields: [
          { name: "actor_id" },
        ]
      },
      {
        name: "auditoria_logentry_content_type_id_c52c00b8",
        fields: [
          { name: "content_type_id" },
        ]
      },
      {
        name: "auditoria_logentry_object_id_8891f9db",
        fields: [
          { name: "object_id" },
        ]
      },
      {
        name: "auditoria_logentry_object_pk_5bb54519",
        fields: [
          { name: "object_pk" },
        ]
      },
      {
        name: "auditoria_logentry_object_pk_5bb54519_like",
        fields: [
          { name: "object_pk" },
        ]
      },
      {
        name: "auditoria_logentry_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
