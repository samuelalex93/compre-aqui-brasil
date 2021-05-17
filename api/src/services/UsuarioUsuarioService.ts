import { getCustomRepository, Repository } from 'typeorm';

import { UsuarioUsuario } from '../entities/UsuarioUsuario';
import { UsuarioUsuarioRepository } from "../repositories/UsuarioUsuarioRepository";

class UsuarioUsuarioService {
  private usuarioUsuarioRepository: Repository<UsuarioUsuario>;

  constructor() {
    this.usuarioUsuarioRepository = getCustomRepository(UsuarioUsuarioRepository);
  }

  async create(_user: UsuarioUsuario) {  
    
    const { email } = _user;
    const userAlreadyExists = await this.usuarioUsuarioRepository.findOne({email});

    if(userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = await this.usuarioUsuarioRepository.create(_user);

    await this.usuarioUsuarioRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {  
    const user = await this.usuarioUsuarioRepository.findOne({ email });

    return user;
  }
}

export { UsuarioUsuarioService };