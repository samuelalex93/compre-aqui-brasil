import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        fantasyName: Sequelize.STRING,
        socialName: Sequelize.STRING,
        mainName: Sequelize.STRING,
        userLogin: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        cnpj: Sequelize.NUMBER, 
        phone: Sequelize.NUMBER,
        celPhone: Sequelize.NUMBER,
        zipcode:Sequelize.NUMBER, 
        state: Sequelize.STRING, 
        city: Sequelize.STRING, 
        district: Sequelize.STRING, 
        adress: Sequelize.STRING, 
        number:Sequelize.NUMBER, 
        complement: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
