const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_flatpage_sites', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    flatpage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_flatpage',
        key: 'id'
      },
      unique: "django_flatpage_sites_flatpage_id_site_id_0d29d9d1_uniq"
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_site',
        key: 'id'
      },
      unique: "django_flatpage_sites_flatpage_id_site_id_0d29d9d1_uniq"
    }
  }, {
    sequelize,
    tableName: 'django_flatpage_sites',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "django_flatpage_sites_flatpage_id_078bbc8b",
        fields: [
          { name: "flatpage_id" },
        ]
      },
      {
        name: "django_flatpage_sites_flatpage_id_site_id_0d29d9d1_uniq",
        unique: true,
        fields: [
          { name: "flatpage_id" },
          { name: "site_id" },
        ]
      },
      {
        name: "django_flatpage_sites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "django_flatpage_sites_site_id_bfd8ea84",
        fields: [
          { name: "site_id" },
        ]
      },
    ]
  });
};
