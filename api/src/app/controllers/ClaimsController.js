import * as Yup from 'yup';

import Claim from '../models/Claim';

class ClaimsController {
  async store(req, res) {

    const schema = Yup.object().shape({
      problem: Yup.string().required(),
      message: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    
    const { 
      claim_id, 
      problem,
      message,
      email,
      company,
      product,
      dateRegister,
      solved,
      soluction } = await Claim.create(req.body);

    return res.json({
      claim_id, 
      problem,
      message,
      email,
      company,
      product,
      dateRegister,
      solved,
      soluction
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      solved: Yup.boolean().required(),
      soluction: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { 
      solved,
      soluction } = await Claim.update(req.body);

    return res.json({
      claim_id, 
      problem,
      message,
      email,
      company,
      product,
      dateRegister,
      solved,
      soluction
    });
  }
}

export default new ClaimsController();
