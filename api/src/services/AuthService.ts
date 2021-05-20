import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';

import * as jwt from "jsonwebtoken";

import { UsuarioUsuario } from '../entities/UsuarioUsuario';
import { UsuarioUsuarioRepository } from "../repositories/UsuarioUsuarioRepository";
import authConfig from '../config/auth';

class AuthService {
  private usuarioUsuarioRepository: Repository<UsuarioUsuario>;

  constructor() {
    this.usuarioUsuarioRepository = getCustomRepository(UsuarioUsuarioRepository);
  }

  async create(params: UsuarioUsuario) {
    let _usuario = new UsuarioUsuario();

    _usuario.email = params.email;
    _usuario.password = params.password;

    if (!(_usuario.email && _usuario.password)) {
      throw new CustomError({
        code: 'DATA_NOT_REPORTED',
        message: 'Data not reported',
        status: 401,
      });
    }

    try {
      _usuario = await this.usuarioUsuarioRepository.findOneOrFail({where: {email: _usuario.email}})
    } catch {
      throw new CustomError({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        status: 404,
      });
    }

    if (!_usuario.checkIfUnencryptedPasswordIsValid(params.password)) {
      throw new CustomError({
        code: 'INCORRECT PASSWORD',
        message: 'Incorrect Password',
        status: 401,
      });
    }

    const token = {
      usuario: {
        id: _usuario.id,
        email: _usuario.email
      },
      token: jwt.sign(
      { id: _usuario.id },
      authConfig.secret,
      { expiresIn: authConfig.expiresIn }
    )};

    return token;
  }

  async changePassword(id: string, params: any) {
    let _usuario = new UsuarioUsuario();

    const { oldPassword, newPassword } = params;

    if (!(oldPassword && newPassword)) {
      throw new CustomError({
        code: 'DATA_NOT_REPORTED',
        message: 'Data not reported',
        status: 401,
      });
    }

    try {
      _usuario = await this.usuarioUsuarioRepository.findOneOrFail(id)
    } catch {
      throw new CustomError({
        code: 'USER_NOT_FOUND',
        message: 'User not found',
        status: 404,
      });
    }

    if (!_usuario.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      throw new CustomError({
        code: 'INCORRECT PASSWORD',
        message: 'Incorrect Password',
        status: 401,
      });
    }

    _usuario.password = newPassword;
    _usuario.hashPassword();
    
    const usuario = await this.usuarioUsuarioRepository.save(_usuario);

    return usuario;
  }
}

export { AuthService };