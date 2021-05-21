import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { ProdutoProduto } from './../entities/ProdutoProduto';
import { ProdutoProdutoRepository } from '../repositories/ProdutoProdutoRepository';

class ProdutoProdutoService {
  private produtoProdutoRepository: Repository<ProdutoProduto>;

  constructor() {
    this.produtoProdutoRepository = getCustomRepository(ProdutoProdutoRepository);
  }
  async create(params: ProdutoProduto) {
    
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      precoVarejo: Yup.number().required(),
      precoAtacado: Yup.number().required(),
      precoCnpj: Yup.number().required(),
      anuncianteId: Yup.number().required(),
      quantidade: Yup.number().required(),
      codigo: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _produto = new ProdutoProduto();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _produto.tipo = params.tipo;
    _produto.nome = params.nome;
    _produto.imagem = params.imagem;
    _produto.descricao = params.descricao;
    _produto.precoVarejo = params.precoVarejo;
    _produto.precoAtacado = params.precoAtacado;
    _produto.precoCnpj = params.precoCnpj;
    _produto.ativo = params.ativo ?? null;
    _produto.dataCadastro = <any>datejoined;
    _produto.dataAlteracao = <any>datejoined;
    _produto.anuncianteId = params.anuncianteId ?? null;
    _produto.quantidade = params.quantidade;
    _produto.desconto = params.desconto;
    _produto.qtdVoucher = params.qtdVoucher;
    _produto.voucher = params.voucher;
    _produto.codigo = params.codigo;
    _produto.dataValidadeVoucher = params.dataValidadeVoucher ?? null;
    _produto.temFoto = params.temFoto ?? null;
    _produto.nomeBusca = params.nomeBusca;
    _produto.temPrecoAtacado = params.temPrecoAtacado ?? null;
    _produto.temPrecoCnpj = params.temPrecoCnpj ?? null;
    _produto.youtube = params.youtube;


      const codeAlreadyExists = await this.produtoProdutoRepository.findOne({ select: ['codigo'], where: { codigo: _produto.codigo} });

      if(!codeAlreadyExists) {
        throw new CustomError({
          code: 'CODE_ALREADY_EXIST',
          message: 'Code already exist',
          status: 409,
        });
      }

    const produto = await this.produtoProdutoRepository.create(_produto);
    await this.produtoProdutoRepository.save(produto);

    console.log(produto)

    return produto;
    
  }

  async update(id: number, params: ProdutoProduto) {

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      precoVarejo: Yup.number().required(),
      precoAtacado: Yup.number().required(),
      precoCnpj: Yup.number().required(),
      anuncianteId: Yup.number().required(),
      quantidade: Yup.number().required(),
      codigo: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _produto = new ProdutoProduto();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _produto.tipo = params.tipo;
    _produto.nome = params.nome;
    _produto.imagem = params.imagem;
    _produto.descricao = params.descricao;
    _produto.precoVarejo = params.precoVarejo;
    _produto.precoAtacado = params.precoAtacado;
    _produto.precoCnpj = params.precoCnpj;
    _produto.ativo = params.ativo ?? null;
    _produto.dataAlteracao = <any>datejoined;
    _produto.anuncianteId = params.anuncianteId ?? null;
    _produto.quantidade = params.quantidade;
    _produto.desconto = params.desconto;
    _produto.qtdVoucher = params.qtdVoucher;
    _produto.voucher = params.voucher;
    _produto.codigo = params.codigo;
    _produto.dataValidadeVoucher = params.dataValidadeVoucher ?? null;
    _produto.temFoto = params.temFoto ?? null;
    _produto.nomeBusca = params.nomeBusca;
    _produto.temPrecoAtacado = params.temPrecoAtacado ?? null;
    _produto.temPrecoCnpj = params.temPrecoCnpj ?? null;
    _produto.youtube = params.youtube;

    const productAlreadyExists = await this.produtoProdutoRepository.find({ select: ['codigo'], where: { codigo: _produto.codigo} });

      console.log(productAlreadyExists);
  
      if(productAlreadyExists.length == 0) {
        throw new CustomError({
          code: 'PRODUCT_NOT_FOUND',
          message: 'Product not found',
          status: 400,
        });
      }

    const produto = await this.produtoProdutoRepository
    .update({id: id}, _produto);

    return produto;
  }


  async findOne(id: string) {  
    const usuario = await this.produtoProdutoRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { ProdutoProdutoService };