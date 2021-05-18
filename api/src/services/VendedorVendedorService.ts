import { getCustomRepository, Repository } from 'typeorm';

import { VendedorVendedor } from './../entities/VendedorVendedor';
import { VendedorVendedorRepository } from '../repositories/VendedorVendedorRepository';

class VendedorVendedorService {
  private vendedorVendedorRepository: Repository<VendedorVendedor>;

  constructor() {
    this.vendedorVendedorRepository = getCustomRepository(VendedorVendedorRepository);
  }

  async create(_vendedor: VendedorVendedor) {  
    
    const { email } = _vendedor;
    const vendedorAlreadyExists = await this.vendedorVendedorRepository.findOne({email});

    if(vendedorAlreadyExists) {
      return vendedorAlreadyExists;
    }

    const vendedor = await this.vendedorVendedorRepository.create(_vendedor);

    await this.vendedorVendedorRepository.save(vendedor);

    return vendedor;
  }

  async findByEmail(email: string) {  
    const vendedor = await this.vendedorVendedorRepository.findOne({ email });

    return vendedor;
  }
}

export { VendedorVendedorService };