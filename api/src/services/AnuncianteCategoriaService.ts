import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { AnuncianteCategoria } from './../entities/AnuncianteCategoria';
import { AnuncianteCategoriaRepository } from '../repositories/AnuncianteCategoriaRepository';

class AnuncianteCategoriaService {
  private anuncianteCategoriaRepository: Repository<AnuncianteCategoria>;

  constructor() {
    this.anuncianteCategoriaRepository = getCustomRepository(AnuncianteCategoriaRepository);
  }
  async create(params: AnuncianteCategoria) {
    
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      slug: Yup.string().required(),
      fontIcon: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _categoria = new AnuncianteCategoria();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _categoria.nome = params.nome;
    _categoria.slug = params.slug;
    _categoria.fontIcon = params.fontIcon;
    _categoria.dataCadastro = <any>datejoined;
    _categoria.dataAlteracao = <any>datejoined;
    _categoria.ativo = params.ativo ?? null;

      const nameAlreadyExists = await this.anuncianteCategoriaRepository.findOne({nome: _categoria.nome});
  
      console.log(nameAlreadyExists);

      if(nameAlreadyExists) {
        throw new CustomError({
          code: 'NAME_ALREADY_EXIST',
          message: 'Name already exist',
          status: 409,
        });
      }

    const anunciante = await this.anuncianteCategoriaRepository.create(_categoria);
    await this.anuncianteCategoriaRepository.save(anunciante);

    return anunciante;
    
  }

  async update(id: number, params: AnuncianteCategoria) {

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      slug: Yup.string().required(),
      fontIcon: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _categoria = new AnuncianteCategoria();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _categoria.nome = params.nome;
    _categoria.slug = params.slug;
    _categoria.fontIcon = params.fontIcon;
    _categoria.dataAlteracao = <any>datejoined;
    _categoria.ativo = params.ativo ?? null;


    const anunciante = await this.anuncianteCategoriaRepository
    .update({id: id}, _categoria);

    return anunciante;
  }


  async findOne(id: string) {  
    const usuario = await this.anuncianteCategoriaRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { AnuncianteCategoriaService };
