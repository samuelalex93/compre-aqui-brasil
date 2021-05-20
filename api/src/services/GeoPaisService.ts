import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';

import { GeoPais } from './../entities/GeoPais';
import { GeoPaisRepository } from '../repositories/GeoPaisRepository';

class GeoPaisService {
  private geoPaisRepository: Repository<GeoPais>;

  constructor() {
    this.geoPaisRepository = getCustomRepository(GeoPaisRepository);
  }

  async listAll() {
    const paises = await this.geoPaisRepository.find();

    if(!paises) {
      throw new CustomError({
        code: 'NO_CONTENT',
        message: 'No Content',
        status: 204,
      });
    }

    return paises;
  }

  async findById(id: string) {
    const pais = await this.geoPaisRepository.findOne(id);
    if(!pais)
      throw new CustomError({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        status: 404,
      });
    
    return pais;
  }
}

export { GeoPaisService };