import * as Yup from 'yup';

import AnuncianteCategoria from '../models/anunciante_categoria';

class AnuncianteCategoriaController {
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
      nome,
      slug,
      font_icon,
      data_cadastro,
      data_alteracao,
      ativo } = await AnuncianteCategoria.create(req.body);

    return res.json({
      id, 
      nome,
      slug,
      font_icon,
      data_cadastro,
      data_alteracao,
      ativo
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
  //     soluction } = await AnuncianteCategoria.update(req.body);

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

export default new AnuncianteCategoriaController();
