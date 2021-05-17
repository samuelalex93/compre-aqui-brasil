const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_flatpage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    enable_comments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    template_name: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    registration_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_flatpage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "django_flatpage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "django_flatpage_url_41612362",
        fields: [
          { name: "url" },
        ]
      },
      {
        name: "django_flatpage_url_41612362_like",
        fields: [
          { name: "url" },
        ]
      },
    ]
  });
};
