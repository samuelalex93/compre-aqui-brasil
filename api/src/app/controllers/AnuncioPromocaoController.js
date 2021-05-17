import * as Yup from 'yup';

import AnuncioPromocao from '../models/anuncio_promocao';

class AnuncioPromocaoController {
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
      titulo,
      imagem,
      descricao,
      regras,
      data_inicio,
      data_fim,
      ativa,
      data_cadastro, 
      data_alteracao,
      anunciante_id } = await AnuncioPromocao.create(req.body);

    return res.json({
      id, 
      titulo,
      imagem,
      descricao,
      regras,
      data_inicio,
      data_fim,
      ativa,
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
  //     soluction } = await AnuncioPromocao.update(req.body);

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

export default new AnuncioPromocaoController();
