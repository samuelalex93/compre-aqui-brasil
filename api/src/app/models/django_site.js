const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('django_site', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    domain: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "django_site_domain_a2e37b91_uniq"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'django_site',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "django_site_domain_a2e37b91_like",
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "django_site_domain_a2e37b91_uniq",
        unique: true,
        fields: [
          { name: "domain" },
        ]
      },
      {
        name: "django_site_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
