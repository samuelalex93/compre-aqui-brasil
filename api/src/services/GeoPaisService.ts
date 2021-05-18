import { getCustomRepository, Repository } from 'typeorm';

import { GeoPais } from './../entities/GeoPais';
import { GeoPaisRepository } from '../repositories/GeoPaisRepository';

class GeoPaisService {
  private geoPaisRepository: Repository<GeoPais>;

  constructor() {
    this.geoPaisRepository = getCustomRepository(GeoPaisRepository);
  }

  async create(_pais: GeoPais) {  
    
    const { nome } = _pais;
    const paisAlreadyExists = await this.geoPaisRepository.findOne({nome});

    if(paisAlreadyExists) {
      return paisAlreadyExists;
    }

    const pais = await this.geoPaisRepository.create(_pais);

    await this.geoPaisRepository.save(pais);

    return pais;
  }

  async findByName(nome: string) {  
    const pais = await this.geoPaisRepository.findOne({ nome });

    return pais;
  }
}

export { GeoPaisService };