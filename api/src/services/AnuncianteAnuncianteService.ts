import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { AnuncianteAnunciante } from './../entities/AnuncianteAnunciante';
import { AnuncianteAnuncianteRepository } from '../repositories/AnuncianteAnuncianteRepository';

class AnuncianteAnuncianteService {
  private anuncianteAnuncianteRepository: Repository<AnuncianteAnunciante>;

  constructor() {
    this.anuncianteAnuncianteRepository = getCustomRepository(AnuncianteAnuncianteRepository);
  }
  async create(params: AnuncianteAnunciante) {
    
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpfCnpj: Yup.string().required(),
      email: Yup.string().email().required(),
      nomeFantasia: Yup.string().required(),
      nomeResponsavel: Yup.string().required(),
      cep: Yup.string().required(),
      bairro: Yup.string().required(),
      endereco: Yup.string().required(),
      numero: Yup.string().required(),
      cidadeId: Yup.number().required(),
      estadoId: Yup.number().required(),
      userId: Yup.number().required(),
      senha: Yup.string().required(),
      telefone1: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _anunciante = new AnuncianteAnunciante();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _anunciante.plano = params.plano;
    _anunciante.imagem = params.imagem;
    _anunciante.cpfCnpj = params.cpfCnpj;
    _anunciante.nome = params.nome;
    _anunciante.email = params.email;
    _anunciante.nomeFantasia = params.nomeFantasia;
    _anunciante.inscEstadual = params.inscEstadual ?? null;
    _anunciante.inscMunicipal = params.inscMunicipal ?? null;
    _anunciante.nomeResponsavel = params.nomeResponsavel;
    _anunciante.cep = params.cep;
    _anunciante.bairro = params.bairro;
    _anunciante.endereco = params.endereco;
    _anunciante.numero = params.numero;
    _anunciante.complemento = params.complemento ?? null;
    _anunciante.telefone1 = params.telefone1;
    _anunciante.telefone2 = params.telefone2 ?? null;
    _anunciante.website = params.website;
    _anunciante.slogan = params.slogan ?? null;
    _anunciante.palavraChave = params.palavraChave;
    _anunciante.localizacao = params.localizacao;
    _anunciante.obs = params.obs;
    _anunciante.ativo = params.ativo ?? true;
    _anunciante.dataEfetivacao = params.dataAlteracao ?? null;
    _anunciante.dataCadastro = <any>datejoined;
    _anunciante.dataAlteracao = <any>datejoined;
    _anunciante.categoriaId = params.categoriaId ?? null;
    _anunciante.cidadeId = params.cidadeId;
    _anunciante.estadoId = params.estadoId;
    _anunciante.userId = params.userId;
    _anunciante.nomeUsuario = params.nomeUsuario;
    _anunciante.senha = params.senha;
    _anunciante.consultorId = params.consultorId ?? null;

      const userAlreadyExists = await this.anuncianteAnuncianteRepository.findOne({email: _anunciante.email});
  
      if(userAlreadyExists) {
        throw new CustomError({
          code: 'USER_ALREADY_EXIST',
          message: 'User already exist',
          status: 409,
        });
      }


    const anunciante = await this.anuncianteAnuncianteRepository.create(_anunciante);
    await this.anuncianteAnuncianteRepository.save(anunciante);

    return anunciante;
    
  }

  async update(id: number, params: AnuncianteAnunciante) {

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpfCnpj: Yup.string().required(),
      email: Yup.string().email().required(),
      nomeFantasia: Yup.string().required(),
      nomeResponsavel: Yup.string().required(),
      cep: Yup.string().required(),
      bairro: Yup.string().required(),
      endereco: Yup.string().required(),
      numero: Yup.string().required(),
      cidadeId: Yup.string().required(),
      estadoId: Yup.string().required(),
      userId: Yup.string().required(),
      senha: Yup.string().required(),
      telefone1: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _anunciante = new AnuncianteAnunciante();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _anunciante.plano = params.plano;
    _anunciante.imagem = params.imagem;
    _anunciante.cpfCnpj = params.cpfCnpj;
    _anunciante.nome = params.nome;
    _anunciante.email = params.email;
    _anunciante.nomeFantasia = params.nomeFantasia;
    _anunciante.inscEstadual = params.inscEstadual ?? null;
    _anunciante.inscMunicipal = params.inscMunicipal ?? null;
    _anunciante.nomeResponsavel = params.nomeResponsavel;
    _anunciante.cep = params.cep;
    _anunciante.bairro = params.bairro;
    _anunciante.endereco = params.endereco;
    _anunciante.numero = params.numero;
    _anunciante.complemento = params.complemento ?? null;
    _anunciante.telefone1 = params.telefone1;
    _anunciante.telefone2 = params.telefone2 ?? null;
    _anunciante.website = params.website;
    _anunciante.slogan = params.slogan ?? null;
    _anunciante.palavraChave = params.palavraChave;
    _anunciante.localizacao = params.localizacao;
    _anunciante.obs = params.obs;
    _anunciante.ativo = params.ativo ?? true;
    _anunciante.dataAlteracao = <any>datejoined;
    _anunciante.categoriaId = params.categoriaId;
    _anunciante.cidadeId = params.cidadeId;
    _anunciante.estadoId = params.estadoId;
    _anunciante.nomeUsuario = params.nomeUsuario;
    _anunciante.consultorId = params.consultorId ?? null;

  
      const userAlreadyExists = await this.anuncianteAnuncianteRepository.findOne({ select: ['email'], where: { email: _anunciante.email} });

      console.log(userAlreadyExists);
  
      if(!userAlreadyExists) {
        throw new CustomError({
          code: 'EMAIL_NOT_REGISTERED',
          message: 'Email not registered',
          status: 400,
        });
      }

    const anunciante = await this.anuncianteAnuncianteRepository
    .update({id: id}, _anunciante);

    return anunciante;
  }

  async findByEmail(email: string) {  
    const user = await this.anuncianteAnuncianteRepository.findOne({ email });

    return user;
  }

  async findOne(id: string) {  
    const usuario = await this.anuncianteAnuncianteRepository.findOne(id);

    if (!usuario)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return usuario;
  }
}

export { AnuncianteAnuncianteService };
