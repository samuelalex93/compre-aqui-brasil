import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class Claim extends Model {
  static init(sequelize) {
    super.init(
      {
        problem: Sequelize.STRING,
        message: Sequelize.STRING,
        email: Sequelize.STRING,
        company: Sequelize.VIRTUAL,
        product: Sequelize.STRING,
        dateRegister: Sequelize.DATE, 
        solved: Sequelize.BOOLEAN,
        soluction: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  // }

}

export default Claim;
