import Sequelize, { Model } from 'sequelize';

class PurchaseList extends Model {
  static init(sequelize) {
    super.init({
      empresa: Sequelize.STRING,
      produto: Sequelize.STRING,
      site: Sequelize.STRING,
      data: Sequelize.DATE,
    },
    {
      sequelize,
    }
  );
  }
}

export default PurchaseList;