import * as Yup from 'yup';

import ProdutoProduto from '../models/produto_produto';

class ProdutoProdutoController {
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
      tipo,
      nome,
      imagem,
      descricao,
      preco_varejo,
      preco_atacado,
      preco_cnpj,
      ativo,
      anunciante_id,
      quantidade,
      desconto,
      qtd_voucher,
      voucher,
      codigo,
      data_validade_voucher,
      tem_foto,
      data_cadastro,
      data_alteracao,
      nome_busca,
      tem_preco_atacado,
      tem_preco_cnpj,
      youtube } = await ProdutoProduto.create(req.body);

    return res.json({
      id, 
      tipo,
      nome,
      imagem,
      descricao,
      preco_varejo,
      preco_atacado,
      preco_cnpj,
      ativo,
      anunciante_id,
      quantidade,
      desconto,
      qtd_voucher,
      voucher,
      codigo,
      data_validade_voucher,
      tem_foto,
      data_cadastro,
      data_alteracao,
      nome_busca,
      tem_preco_atacado,
      tem_preco_cnpj,
      youtube
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
  //     soluction } = await ProdutoProduto.update(req.body);

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

export default new ProdutoProdutoController();
