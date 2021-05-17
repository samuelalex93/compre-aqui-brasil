import * as Yup from 'yup';

import AssinaturaPlano from '../models/assinatura_plano';

class AssinaturaPlanoController {
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
      imagem,
      tipo,
      valor,
      data_cadastro,
      data_alteracao,
      ativo,
      qtd_fotos } = await AssinaturaPlano.create(req.body);

    return res.json({
      id, 
      imagem,
      tipo,
      valor,
      data_cadastro,
      data_alteracao,
      ativo,
      qtd_fotos
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
  //     soluction } = await AssinaturaPlano.update(req.body);

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

export default new AssinaturaPlanoController();
