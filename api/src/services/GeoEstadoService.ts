import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';

import { GeoEstado } from './../entities/GeoEstado';
import { GeoEstadoRepository } from '../repositories/GeoEstadoRepository';

class GeoEstadoService {
  private geoEstadoRepository: Repository<GeoEstado>;

  constructor() {
    this.geoEstadoRepository = getCustomRepository(GeoEstadoRepository);
  }

  async listAll() {
    const estados = await this.geoEstadoRepository.find();

    if(!estados) {
      throw new CustomError({
        code: 'NO_CONTENT',
        message: 'No Content',
        status: 204,
      });
    }

    return estados;
  }

  async findById(id: string) {
    const estado = await this.geoEstadoRepository.findOne(id);
    if(!estado)
      throw new CustomError({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        status: 404,
      });
    
    return estado;
  }
}

export { GeoEstadoService };