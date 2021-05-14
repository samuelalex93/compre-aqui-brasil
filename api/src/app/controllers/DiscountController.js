import * as Yup from 'yup';

import Discount from '../models/Discount';

class DiscountController {
  async store(req, res) {

        

    const schema = Yup.object().shape({
      couponDiscount: Yup.string().required(),
      discount: Yup.number().required(),
      validity: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    
    const { 
      discount_id, 
      company,
      product,
      couponDiscount,
      discount,
      validity,
      used } = await Claim.create(req.body);

    return res.json({
      discount_id, 
      company,
      product,
      couponDiscount,
      discount,
      validity,
      used
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      used: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { used } = await Claim.update(req.body);

    return res.json({
      discount_id, 
      company,
      product,
      couponDiscount,
      discount,
      validity,
      used
    });
  }
}

export default new DiscountController();
