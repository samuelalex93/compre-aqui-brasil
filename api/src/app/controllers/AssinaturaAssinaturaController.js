import * as Yup from 'yup';

import AssinaturaAssinatura from '../models/assinatura_assinatura';

class AssinaturaAssinaturaController {
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
      qtd_mensalidade,
      valor,
      status,
      data_pagamento,
      meio_pagamento,
      documento,
      data_cancelamento,
      motivo_cancelamento, 
      data_cadastro,
      data_alteracao,
      sucesso,
      cancelado,
      cortesia,
      anunciante_id,
      plano_id } = await AssinaturaAssinatura.create(req.body);

    return res.json({
      id, 
      qtd_mensalidade,
      valor,
      status,
      data_pagamento,
      meio_pagamento,
      documento,
      data_cancelamento,
      motivo_cancelamento, 
      data_cadastro,
      data_alteracao,
      sucesso,
      cancelado,
      cortesia,
      anunciante_id,
      plano_id 
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
  //     soluction } = await AssinaturaAssinatura.update(req.body);

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

export default new AssinaturaAssinaturaController();
