import Sequelize, { Model } from 'sequelize';

class Discount extends Model {
  static init(sequelize) {
    super.init(
      {
        company: Sequelize.STRING,
        product: Sequelize.STRING,
        couponDiscount: Sequelize.STRING,
        discount: Sequelize.NUMBER,
        validity: Sequelize.DATE, 
        used: Sequelize.BOOLEAN,
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

export default Discount;
