import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { ProdutoWishlist } from './../entities/ProdutoWishlist';
import { ProdutoWishlistRepository } from '../repositories/ProdutoWishlistRepository';

class ProdutoWishlistService {
  private produtoWishlistRepository: Repository<ProdutoWishlist>;

  constructor() {
    this.produtoWishlistRepository = getCustomRepository(ProdutoWishlistRepository);
  }
  async create(params: ProdutoWishlist) {
    
    const schema = Yup.object().shape({
      clienteId: Yup.number().required(),
      produtoId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _wishlist = new ProdutoWishlist();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _wishlist.deletado = params.deletado;
    _wishlist.dataCadastro = <any>datejoined;
    _wishlist.dataAlteracao = <any>datejoined;
    _wishlist.clienteId = params.clienteId ?? null;
    _wishlist.produtoId = params.produtoId ?? null;

    const wishlist = await this.produtoWishlistRepository.create(_wishlist);
    await this.produtoWishlistRepository.save(wishlist);

    return wishlist;
    
  }

  async update(id: number, params: ProdutoWishlist) {

    const schema = Yup.object().shape({
      clienteId: Yup.number().required(),
      produtoId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _wishlist = new ProdutoWishlist();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _wishlist.deletado = params.deletado;
    _wishlist.dataAlteracao = <any>datejoined;


    const wishlist = await this.produtoWishlistRepository
    .update({id: id}, _wishlist);

    return wishlist;
  }


  async findOne(id: string) {  
    const usuario = await this.produtoWishlistRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { ProdutoWishlistService };
