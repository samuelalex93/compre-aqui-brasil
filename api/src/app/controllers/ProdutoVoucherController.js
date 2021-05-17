import * as Yup from 'yup';

import ProdutoVoucher from '../models/produto_voucher';

class ProdutoVoucherController {
  async store(req, res) {

    // const schema = Yup.object().shape({
    //   problem: Yup.string().required(),
    //   message: Yup.string().required(),
    //   email: Yup.string().email().required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validation fails' });
    // }
    
    const { 
      id, 
      codigo,
      desconto,
      data_validade,
      ativo,
      utilizado,
      data_cadastro,
      data_alteracao,
      cliente_id,
      produto_id } = await ProdutoVoucher.create(req.body);

    return res.json({
        id, 
        codigo,
        desconto,
        data_validade,
        ativo,
        utilizado,
        data_cadastro,
        data_alteracao,
        cliente_id,
        produto_id
    });
  }

  // async update(req, res) {
  //   const schema = Yup.object().shape({
  //     solved: Yup.boolean().required(),
  //     soluction: Yup.string().required(),
  //   });

  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: 'Validation fails' });
  //   }

  //   const { 
  //     solved,
  //     soluction } = await ProdutoVoucher.update(req.body);

  //   return res.json({
  //     claim_id, 
  //     problem,
  //     message,
  //     email,
  //     company,
  //     product,
  //     dateRegister,
  //     solved,
  //     soluction
  //   });
  // }
}

export default new ProdutoVoucherController();