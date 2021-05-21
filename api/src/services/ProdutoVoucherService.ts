import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { ProdutoVoucher } from './../entities/ProdutoVoucher';
import { ProdutoVoucherRepository } from '../repositories/ProdutoVoucherRepository';

class ProdutoVoucherService {
  private produtoVoucherRepository: Repository<ProdutoVoucher>;

  constructor() {
    this.produtoVoucherRepository = getCustomRepository(ProdutoVoucherRepository);
  }
  async create(params: ProdutoVoucher) {
    
    const schema = Yup.object().shape({
      codigo: Yup.string().required(),
      desconto: Yup.number().required(),
      dataValidade: Yup.string().required(),
      clienteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _voucher = new ProdutoVoucher();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _voucher.codigo = params.codigo;
    _voucher.desconto = params.desconto;
    _voucher.dataValidade = params.dataValidade;
    _voucher.ativo = params.ativo ?? null;
    _voucher.utilizado = params.utilizado ?? null;
    _voucher.dataCadastro = <any>datejoined;
    _voucher.dataAlteracao = <any>datejoined;
    _voucher.clienteId = params.clienteId ?? null;
    _voucher.produtoId = params.produtoId ?? null;

    const voucher = await this.produtoVoucherRepository.create(_voucher);
    await this.produtoVoucherRepository.save(voucher);

    return voucher;
    
  }

  async update(id: number, params: ProdutoVoucher) {

    const schema = Yup.object().shape({
      codigo: Yup.string().required(),
      desconto: Yup.number().required(),
      dataValidade: Yup.string().required(),
      clienteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _voucher = new ProdutoVoucher();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _voucher.codigo = params.codigo;
    _voucher.desconto = params.desconto;
    _voucher.dataValidade = params.dataValidade;
    _voucher.ativo = params.ativo ?? null;
    _voucher.utilizado = params.utilizado ?? null;
    _voucher.dataAlteracao = <any>datejoined;
    _voucher.produtoId = params.produtoId ?? null;


    const voucher = await this.produtoVoucherRepository
    .update({id: id}, _voucher);

    return voucher;
  }


  async findOne(id: string) {  
    const usuario = await this.produtoVoucherRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { ProdutoVoucherService };
