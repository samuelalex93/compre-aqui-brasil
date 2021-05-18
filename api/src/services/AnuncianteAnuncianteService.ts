import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';

import { AnuncianteAnunciante } from './../entities/AnuncianteAnunciante';
import { AnuncianteAnuncianteRepository } from '../repositories/AnuncianteAnuncianteRepository';

class AnuncianteAnuncianteService {
  private anuncianteAnuncianteRepository: Repository<AnuncianteAnunciante>;

  constructor() {
    this.anuncianteAnuncianteRepository = getCustomRepository(AnuncianteAnuncianteRepository);
  }
  async create(_anunciante: AnuncianteAnunciante) {

    const schema = Yup.object().shape({
      problem: Yup.string().required(),
      message: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(_anunciante))) {
      throw 'Validation fails';
    }

    return;

    const { 
      id, 
      plano,
      imagem,
      nome,
      cpfCnpj,
      email,
      nomeFantasia,
      inscEstadual,
      inscMunicipal,
      nomeResponsavel,
      cep,
      bairro,
      endereco,
      numero,
      complemento,
      telefone1,
      telefone2,
      website,
      slogan,
      palavraChave,
      localizacao,
      obs,
      ativo,
      dataEfetivacao,
      dataCadastro,
      dataAlteracao,
      categoriaId,
      cidadeId,
      estadoId,
      userId,
      nomeUsuario,
      senha,
      consultorId } =  _anunciante;
      
    const anuncianteAlreadyExists = await this.anuncianteAnuncianteRepository.findOne({email});

    if(anuncianteAlreadyExists) {
      return anuncianteAlreadyExists;
    }

    const anunciante = await this.anuncianteAnuncianteRepository.create(_anunciante);

    await this.anuncianteAnuncianteRepository.save(anunciante);

    return anunciante;
    
  }

  // async update(req, res) {
  //   const schema = Yup.object().shape({
  //     solved: Yup.boolean().required(),
  //     soluction: Yup.string().required(),
  //   });

  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: 'Validation fails' });
  //   }

  //   const { 
  //     solved,
  //     soluction } = await AnuncianteAnuncianteRepository.update(req.body);

  //   return res.json({
  //     claim_id, 
  //     problem,
  //     message,
  //     email,
  //     company,
  //     product,
  //     dateRegister,
  //     solved,
  //     soluction
  //   });
  // }
}

export { AnuncianteAnuncianteService };
