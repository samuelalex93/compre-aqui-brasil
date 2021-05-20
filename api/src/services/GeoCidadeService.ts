import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';

import { GeoCidade } from './../entities/GeoCidade';
import { GeoCidadeRepository } from '../repositories/GeoCidadeRepository';

class GeoCidadeService {
  private geoCidadeRepository: Repository<GeoCidade>;

  constructor() {
    this.geoCidadeRepository = getCustomRepository(GeoCidadeRepository);
  }

  async listAll(page: number) {
    let skip = 0;
    let take = 50;
    
    if(page > 1) {
      skip = take * (page -1);
    }

    const [data , count] = await this.geoCidadeRepository.findAndCount({
      order: {
        nome: 'ASC'
      },
      skip,
      take
    });

    if(!data) {
      throw new CustomError({
        code: 'NO_CONTENT',
        message: 'No Content',
        status: 204,
      });
    }

    return { data, count };
  }

  async findByEstado(page?: number, estadoId?: number) {
    let skip = 0;
    let take = 50;
    
    if(page > 1) {
      skip = take * (page -1);
    }

    const [data , count] = await this.geoCidadeRepository.findAndCount({
      where : { estadoId },
      order: {
        nome: 'ASC'
      },
      skip,
      take
    });
    

    if(!data) {
      throw new CustomError({
        code: 'NO_CONTENT',
        message: 'No Content',
        status: 204,
      });
    }

    return { data, count };
  }

  async findById(id: string) {
    const cidade = await this.geoCidadeRepository.findOne(id);
    if(!cidade)
      throw new CustomError({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        status: 404,
      });
    
    return cidade;
  }
}

export { GeoCidadeService };