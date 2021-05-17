import * as Yup from 'yup';

import ProdutoDenuncia from '../models/produto_denuncia';

class ProdutoDenunciaController {
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
      motivo,
      descricao,
      email,
      solucao,
      resolvido,
      data_cadastro,
      data_alteracao,
      produto_id,
      anunciante_id } = await ProdutoDenuncia.create(req.body);

    return res.json({
        id, 
        motivo,
        descricao,
        email,
        solucao,
        resolvido,
        data_cadastro,
        data_alteracao,
        produto_id,
        anunciante_id
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
  //     soluction } = await ProdutoDenuncia.update(req.body);

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

export default new ProdutoDenunciaController();