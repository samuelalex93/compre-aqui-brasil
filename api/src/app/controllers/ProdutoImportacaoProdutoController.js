import * as Yup from 'yup';

import ProdutoImportacaoProduto from '../models/produto_importacaodeproduto';

class ProdutoImportacaoProdutoController {
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
      arquivo,
      tipo,
      processado,  
      data_cadastro,
      data_alteracao,
      anunciante_id } = await ProdutoImportacaoProduto.create(req.body);

    return res.json({
        id, 
        arquivo,
        tipo,
        processado,
        data_cadastro,
        data_alteracao,
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
  //     soluction } = await ProdutoImportacaoProduto.update(req.body);

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

export default new ProdutoImportacaoProdutoController();