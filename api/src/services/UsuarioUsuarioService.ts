import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import * as Yup from 'yup';
import dateFormat from 'dateformat';

import { UsuarioUsuario } from '../entities/UsuarioUsuario';
import { UsuarioUsuarioRepository } from "../repositories/UsuarioUsuarioRepository";

class UsuarioUsuarioService {
  private usuarioUsuarioRepository: Repository<UsuarioUsuario>;

  constructor() {
    this.usuarioUsuarioRepository = getCustomRepository(UsuarioUsuarioRepository);
  }

  async listAll() {
    const usuarios = await this.usuarioUsuarioRepository.find();

    if(!usuarios) {
      throw new CustomError({
        code: 'NO_CONTENT',
        message: 'No Content',
        status: 204,
      });
    }

    return usuarios;
  }

  async create(params: UsuarioUsuario) {
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _usuario = new UsuarioUsuario();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _usuario.email = params.email;
    _usuario.password = params.password;
    _usuario.username = params.email;
    _usuario.lastName = params.lastName;
    _usuario.firstName = params.firstName;
    _usuario.isStaff = params.isStaff ?? false;
    _usuario.isActive = params.isActive ?? true;
    _usuario.lastLogin = params.lastLogin ?? null;
    _usuario.isSuperuser = params.isSuperuser ?? false;
    _usuario.dateJoined = <any>datejoined;
    _usuario.hashPassword();

    const userAlreadyExists = await this.usuarioUsuarioRepository.findOne({email: _usuario.email});
  
    if(userAlreadyExists) {
      throw new CustomError({
        code: 'USER_ALREADY_EXIST',
        message: 'User already exist',
        status: 409,
      });
    }

    const usuario = await this.usuarioUsuarioRepository.create(_usuario);
    await this.usuarioUsuarioRepository.save(usuario);
    return usuario;
  }

  async findOne(id: string) {  
    const usuario = await this.usuarioUsuarioRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }

  async findByEmail(email: string) {  
    const usuario = await this.usuarioUsuarioRepository.findOne({ email });

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }

  async update(id: string, params: UsuarioUsuario) {
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _usuario = new UsuarioUsuario();
    _usuario.email = params.email;
    _usuario.password = params.password;
    _usuario.username = params.email;
    _usuario.lastName = params.lastName;
    _usuario.firstName = params.firstName;
    _usuario.isStaff = params.isStaff ?? false;
    _usuario.isActive = params.isActive ?? true;
    _usuario.lastLogin = params.lastLogin ?? null;
    _usuario.isSuperuser = params.isSuperuser ?? false;
    _usuario.hashPassword();

    const usuarioExists = await this.usuarioUsuarioRepository.findOne(id);
  
    if(!usuarioExists) {
      throw new CustomError({
        code: 'USER_NOT_EXIST',
        message: 'User not exist',
        status: 409,
      });
    }

    const usuario = await this.usuarioUsuarioRepository.save(_usuario);

    if(!usuario) {
      throw new CustomError({
        code: 'USERNAME_ALREADY_IN_USE',
        message: 'Username already in use',
        status: 409,
      });
    }

    return usuario;
  }

  async delete(id: string) {
    const usuario = await this.usuarioUsuarioRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    try {
      await this.usuarioUsuarioRepository.delete(id);
    } catch {
      throw new CustomError({
        code: 'BAD_REQUEST',
        message: 'Bad request',
        status: 502,
      });
    }
    
    return;
  }
}

export { UsuarioUsuarioService };