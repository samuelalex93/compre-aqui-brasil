import { getCustomRepository, Repository } from 'typeorm';

import { GeoCidade } from './../entities/GeoCidade';
import { GeoCidadeRepository } from '../repositories/GeoCidadeRepository';

class GeoCidadeService {
  private geoCidadeRepository: Repository<GeoCidade>;

  constructor() {
    this.geoCidadeRepository = getCustomRepository(GeoCidadeRepository);
  }

  async create(_cidade: GeoCidade) {  
    
    const { nome } = _cidade;
    const cidadeAlreadyExists = await this.geoCidadeRepository.findOne({nome});

    if(cidadeAlreadyExists) {
      return cidadeAlreadyExists;
    }

    const cidade = await this.geoCidadeRepository.create(_cidade);

    await this.geoCidadeRepository.save(cidade);

    return cidade;
  }

  async findByName(nome: string) {  
    const cidade = await this.geoCidadeRepository.findOne({ nome });

    return cidade;
  }
}

export { GeoCidadeService };