import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import * as Yup from 'yup';
import dateFormat from 'dateformat';

import { AnuncioDescricao } from './../entities/AnuncioDescricao';
import { AnuncioDescricaoRepository } from '../repositories/AnuncioDescricaoRepository';

class AnuncioDescricaoService {
  private anuncioDescricaoRepository: Repository<AnuncioDescricao>;

  constructor() {
    this.anuncioDescricaoRepository = getCustomRepository(AnuncioDescricaoRepository);
  }

  async create(params: AnuncioDescricao) { 
    const schema = Yup.object().shape({
      descricao: Yup.string().required(),
      anuncianteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _anuncioDescricao = new AnuncioDescricao();
    const dateCreated = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _anuncioDescricao.descricao = params.descricao;
    _anuncioDescricao.anuncianteId = params.anuncianteId;
    _anuncioDescricao.dataCadastro = <any>dateCreated;
    _anuncioDescricao.dataAlteracao = <any>dateCreated;

      const alreadyExists = await this.anuncioDescricaoRepository.findOne({anuncianteId: _anuncioDescricao.anuncianteId});

      if(alreadyExists) {
        throw new CustomError({
          code: 'DATA_ALREADY_EXIST',
          message: 'Data already exist',
          status: 409,
        });
      }

    const anuncioDescricao = await this.anuncioDescricaoRepository.create(_anuncioDescricao);
    await this.anuncioDescricaoRepository.save(anuncioDescricao);

    return anuncioDescricao; 
  }

  async update(id: number, params: AnuncioDescricao) {
    const schema = Yup.object().shape({
      descricao: Yup.string().required(),
      anuncianteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _anuncioDescricao = new AnuncioDescricao();
    const dateUpdated = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _anuncioDescricao.descricao = params.descricao;
    _anuncioDescricao.anuncianteId = params.anuncianteId;
    _anuncioDescricao.dataAlteracao = <any>dateUpdated;

    const dataAlreadyExists = await this.anuncioDescricaoRepository.findOne(id);

    if(!dataAlreadyExists) {
      throw new CustomError({
        code: 'DATA_NOT_FOUND',
        message: 'Data not found',
        status: 400,
      });
    }

    const anuncioDescricao = await this.anuncioDescricaoRepository
    .update({id: id}, _anuncioDescricao);

    return anuncioDescricao;
  }

  async findByAnuncianteId(id: string) {
    const anuncioDescricao = await this.anuncioDescricaoRepository.findOne({where: {anuncianteId: id}});
    
    if(!anuncioDescricao)
      throw new CustomError({
        code: 'DATA_NOT_FOUND',
        message: 'Data not found',
        status: 404,
      });
    
    return anuncioDescricao;
  }

  async delete(id: string) {
    const anuncioDescricao = await this.anuncioDescricaoRepository.findOne(id);

    if (!anuncioDescricao)
    throw new CustomError({
      code: 'DATA_NOT_FOUND',
      message: 'Data not found',
      status: 404,
    });

    try {
      await this.anuncioDescricaoRepository.delete(id);
    } catch {
      throw new CustomError({
        code: 'BAD_REQUEST',
        message: 'Bad request',
        status: 502,
      });
    }
    
    return;
  }
}

export { AnuncioDescricaoService };