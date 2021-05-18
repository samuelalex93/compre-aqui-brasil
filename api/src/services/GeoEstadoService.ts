import { getCustomRepository, Repository } from 'typeorm';

import { GeoEstado } from './../entities/GeoEstado';
import { GeoEstadoRepository } from '../repositories/GeoEstadoRepository';

class GeoEstadoService {
  private geoEstadoRepository: Repository<GeoEstado>;

  constructor() {
    this.geoEstadoRepository = getCustomRepository(GeoEstadoRepository);
  }

  async create(_estado: GeoEstado) {  
    
    const { nome } = _estado;
    const estadoAlreadyExists = await this.geoEstadoRepository.findOne({nome});

    if(estadoAlreadyExists) {
      return estadoAlreadyExists;
    }

    const estado = await this.geoEstadoRepository.create(_estado);

    await this.geoEstadoRepository.save(estado);

    return estado;
  }

  async findByName(nome: string) {  
    const estado = await this.geoEstadoRepository.findOne({ nome });

    return estado;
  }
}

export { GeoEstadoService };