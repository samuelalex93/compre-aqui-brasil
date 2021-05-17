import * as Yup from 'yup';

import AnuncianteAnunciante from '../models/anunciante_anunciante';

class AnuncianteAnuncianteController {
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
      plano,
      imagem,
      nome,
      cpf_cnpj,
      email,
      nome_fantasia,
      insc_estadual,
      insc_municipal,
      nome_responsavel,
      cep,
      bairro,
      endereco,
      numero,
      complemento,
      telefone1,
      telefone2,
      website,
      slogan,
      palavra_chave,
      localizacao,
      obs,
      ativo,
      data_efetivacao,
      data_cadastro,
      data_alteracao,
      categoria_id,
      cidade_id,
      estado_id,
      user_id,
      nome_usuario,
      senha,
      consultor_id } = await AnuncianteAnunciante.create(req.body);

    return res.json({
      id, 
      plano,
      imagem,
      nome,
      cpf_cnpj,
      email,
      nome_fantasia,
      insc_estadual,
      insc_municipal,
      nome_responsavel,
      cep,
      bairro,
      endereco,
      numero,
      complemento,
      telefone1,
      telefone2,
      website,
      slogan,
      palavra_chave,
      localizacao,
      obs,
      ativo,
      data_efetivacao,
      data_cadastro,
      data_alteracao,
      categoria_id,
      cidade_id,
      estado_id,
      user_id,
      nome_usuario,
      senha,
      consultor_id
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
  //     soluction } = await AnuncianteAnunciante.update(req.body);

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

export default new AnuncianteAnuncianteController();
