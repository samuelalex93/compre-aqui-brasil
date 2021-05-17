import * as Yup from 'yup';

import ClienteCliente from '../models/cliente_cliente';

class ClienteClienteController {
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
      email,
      senha,
      imagem,
      cpf,
      data_nascimento,
      cep,
      bairro,
      endereco,
      numero,
      complemento,
      celular,
      ativado,
      cancelado,
      obs,
      data_cadastro,
      data_alteracao,
      cidade_id,
      estado_id,
      user_id } = await ClienteCliente.create(req.body);

    return res.json({
      id, 
      nome,
      email,
      senha,
      imagem,
      cpf,
      data_nascimento,
      cep,
      bairro,
      endereco,
      numero,
      complemento,
      celular,
      ativado,
      cancelado,
      obs,
      data_cadastro,
      data_alteracao,
      cidade_id,
      estado_id,
      user_id
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
  //     soluction } = await ClienteCliente.update(req.body);

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

export default new ClienteClienteController();
