import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { ProdutoImportacaodeproduto } from './../entities/ProdutoImportacaodeproduto';
import { ProdutoImportacaodeprodutoRepository } from '../repositories/ProdutoImportacaoProdutoRepository';

class ProdutoImportacaodeprodutoService {
  private produtoImportacaodeprodutoRepository: Repository<ProdutoImportacaodeproduto>;

  constructor() {
    this.produtoImportacaodeprodutoRepository = getCustomRepository(ProdutoImportacaodeprodutoRepository);
  }
  async create(params: ProdutoImportacaodeproduto) {
    
    const schema = Yup.object().shape({
      arquivo: Yup.string().required(),
      tipo: Yup.number().required(),
      anuncianteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _importacao = new ProdutoImportacaodeproduto();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _importacao.arquivo = params.arquivo;
    _importacao.tipo = params.tipo;
    _importacao.processado = params.processado;
    _importacao.dataCadastro = <any>datejoined;
    _importacao.dataAlteracao = <any>datejoined;
    _importacao.anuncianteId = params.anuncianteId ?? null;


    const importacao = await this.produtoImportacaodeprodutoRepository.create(_importacao);
    await this.produtoImportacaodeprodutoRepository.save(importacao);

    return importacao;
    
  }

  async update(id: number, params: ProdutoImportacaodeproduto) {

    const schema = Yup.object().shape({
      processado: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _importacao = new ProdutoImportacaodeproduto();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _importacao.processado = params.processado;
    _importacao.dataAlteracao = <any>datejoined;


    const importacao = await this.produtoImportacaodeprodutoRepository
    .update({id: id}, _importacao);

    return importacao;
  }


  async findOne(id: string) {  
    const usuario = await this.produtoImportacaodeprodutoRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { ProdutoImportacaodeprodutoService };


