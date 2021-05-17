const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('thumbnail_kvstore', {
    key: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'thumbnail_kvstore',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "thumbnail_kvstore_key_3f850178_like",
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "thumbnail_kvstore_pkey",
        unique: true,
        fields: [
          { name: "key" },
        ]
      },
    ]
  });
};
