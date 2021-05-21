import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { ProdutoDenuncia } from './../entities/ProdutoDenuncia';
import { ProdutoDenunciaRepository } from '../repositories/ProdutoDenunciaRepository';

class ProdutoDenunciaService {
  private produtoDenunciaRepository: Repository<ProdutoDenuncia>;

  constructor() {
    this.produtoDenunciaRepository = getCustomRepository(ProdutoDenunciaRepository);
  }
  async create(params: ProdutoDenuncia) {
    
    const schema = Yup.object().shape({
      motivo: Yup.number().required(),
      descricao: Yup.string().required(),
      email: Yup.string().email().required(),
      produtoId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _denuncia = new ProdutoDenuncia();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _denuncia.motivo = params.motivo;
    _denuncia.descricao = params.descricao;
    _denuncia.email = params.email;
    _denuncia.resolvido = params.resolvido;
    _denuncia.dataCadastro = <any>datejoined;
    _denuncia.dataAlteracao = <any>datejoined;
    _denuncia.produtoId = params.produtoId ?? null;


    const denuncia = await this.produtoDenunciaRepository.create(_denuncia);
    await this.produtoDenunciaRepository.save(denuncia);

    return denuncia;
    
  }

  async update(id: number, params: ProdutoDenuncia) {

    const schema = Yup.object().shape({
      solucao: Yup.string().required(),
      resolvido: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _denuncia = new ProdutoDenuncia();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _denuncia.motivo = params.motivo;
    _denuncia.descricao = params.descricao;
    _denuncia.email = params.email;
    _denuncia.solucao = params.solucao;
    _denuncia.resolvido = params.resolvido;
    _denuncia.dataAlteracao = <any>datejoined;


    const denuncia = await this.produtoDenunciaRepository
    .update({id: id}, _denuncia);

    return denuncia;
  }


  async findOne(id: string) {  
    const usuario = await this.produtoDenunciaRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { ProdutoDenunciaService };
