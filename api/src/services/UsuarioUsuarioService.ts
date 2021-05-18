import { getCustomRepository, Repository } from 'typeorm';

import { UsuarioUsuario } from '../entities/UsuarioUsuario';
import { UsuarioUsuarioRepository } from "../repositories/UsuarioUsuarioRepository";

class UsuarioUsuarioService {
  private usuarioUsuarioRepository: Repository<UsuarioUsuario>;

  constructor() {
    this.usuarioUsuarioRepository = getCustomRepository(UsuarioUsuarioRepository);
  }

  async create(params: UsuarioUsuario) {

    let _usuario = new UsuarioUsuario();
    _usuario.email = params.email;
    _usuario.password = params.password;
    _usuario.username = params.username;
    _usuario.lastName = params.lastName;
    _usuario.firstName = params.firstName;
    _usuario.isStaff = params.isStaff;
    _usuario.isActive = params.isActive;
    _usuario.lastLogin = params.lastLogin;
    _usuario.isSuperuser = params.isSuperuser;
    _usuario.dateJoined = params.dateJoined;
    
    _usuario.hashPassword();

    const userAlreadyExists = await this.usuarioUsuarioRepository.findOne({email: _usuario.email});
  
    if(userAlreadyExists) {
      return userAlreadyExists;
    }

    const usuario = await this.usuarioUsuarioRepository.create(_usuario);

    await this.usuarioUsuarioRepository.save(usuario);

    return usuario;
  }

  async findByEmail(email: string) {  
    const user = await this.usuarioUsuarioRepository.findOne({ email });

    return user;
  }
}

export { UsuarioUsuarioService };