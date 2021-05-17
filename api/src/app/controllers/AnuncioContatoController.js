import * as Yup from 'yup';

import AnuncioContato from '../models/anuncio_contato';

class AnuncioContatoController {
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
      assunto,  
      nome,
      email,
      telefone,
      mensagem,
      resolvido,
      data_cadastro, 
      data_alteracao,
      anunciante_id,
      cliente_id } = await AnuncioContato.create(req.body);

    return res.json({
      id, 
      assunto,  
      nome,
      email,
      telefone,
      mensagem,
      resolvido,
      data_cadastro, 
      data_alteracao,
      anunciante_id,
      cliente_id
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
  //     soluction } = await AnuncioContato.update(req.body);

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

export default new AnuncioContatoController();
