import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import * as Yup from 'yup';
import dateFormat from 'dateformat';

import { AnuncioFacilidade } from './../entities/AnuncioFacilidade';
import { AnuncioFacilidadeRepository } from '../repositories/AnuncioFacilidadeRepository';

class AnuncioFacilidadeService {
  private anuncioFacilidadeRepository: Repository<AnuncioFacilidade>;

  constructor() {
    this.anuncioFacilidadeRepository = getCustomRepository(AnuncioFacilidadeRepository);
  }

  async create(params: AnuncioFacilidade) { 
    const schema = Yup.object().shape({
      Facilidade: Yup.string().required(),
      anuncianteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _anuncioFacilidade = new AnuncioFacilidade();
    const dateCreated = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _anuncioFacilidade.nome = params.nome;
    _anuncioFacilidade.anuncianteId = params.anuncianteId;
    _anuncioFacilidade.dataCadastro = <any>dateCreated;
    _anuncioFacilidade.dataAlteracao = <any>dateCreated;

      const alreadyExists = await this.anuncioFacilidadeRepository.findOne({anuncianteId: _anuncioFacilidade.anuncianteId});

      if(alreadyExists) {
        throw new CustomError({
          code: 'DATA_ALREADY_EXIST',
          message: 'Data already exist',
          status: 409,
        });
      }

    const anuncioFacilidade = await this.anuncioFacilidadeRepository.create(_anuncioFacilidade);
    await this.anuncioFacilidadeRepository.save(anuncioFacilidade);

    return anuncioFacilidade; 
  }

  async update(id: number, params: AnuncioFacilidade) {
    const schema = Yup.object().shape({
      Facilidade: Yup.string().required(),
      anuncianteId: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _anuncioFacilidade = new AnuncioFacilidade();
    const dateUpdated = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _anuncioFacilidade.nome = params.nome;
    _anuncioFacilidade.anuncianteId = params.anuncianteId;
    _anuncioFacilidade.dataAlteracao = <any>dateUpdated;

    const dataAlreadyExists = await this.anuncioFacilidadeRepository.findOne(id);

    if(!dataAlreadyExists) {
      throw new CustomError({
        code: 'DATA_NOT_FOUND',
        message: 'Data not found',
        status: 400,
      });
    }

    const anuncioFacilidade = await this.anuncioFacilidadeRepository
    .update({id: id}, _anuncioFacilidade);

    return anuncioFacilidade;
  }

  async findByAnuncianteId(id: string) {
    const anuncioFacilidade = await this.anuncioFacilidadeRepository.findOne({where: {anuncianteId: id}});
    
    if(!anuncioFacilidade)
      throw new CustomError({
        code: 'DATA_NOT_FOUND',
        message: 'Data not found',
        status: 404,
      });
    
    return anuncioFacilidade;
  }

  async delete(id: string) {
    const anuncioFacilidade = await this.anuncioFacilidadeRepository.findOne(id);

    if (!anuncioFacilidade)
    throw new CustomError({
      code: 'DATA_NOT_FOUND',
      message: 'Data not found',
      status: 404,
    });

    try {
      await this.anuncioFacilidadeRepository.delete(id);
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

export { AnuncioFacilidadeService };