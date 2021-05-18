import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';

import { AnuncianteCategoria } from './../entities/AnuncianteCategoria';
import { AnuncianteCategoriaRepository } from '../repositories/AnuncianteCategoriaRepository';

class AnuncianteCategoriaService {
  private anuncianteCategoriaRepository: Repository<AnuncianteCategoria>;

  constructor() {
    this.anuncianteCategoriaRepository = getCustomRepository(AnuncianteCategoriaRepository);
  }

  async create(_anunciante: AnuncianteCategoria) {

    // const schema = Yup.object().shape({
    //   problem: Yup.string().required(),
    //   message: Yup.string().required(),
    //   email: Yup.string().email().required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validation fails' });
    // }

    const { 
      id, 
      nome,
      slug,
      fontIcon,
      dataCadastro,
      dataAlteracao,
      ativo } = _anunciante;
      
    // const anuncianteAlreadyExists = await this.anuncianteCategoriaRepository.findOne({email});

    // if(anuncianteAlreadyExists) {
    //   return anuncianteAlreadyExists;
    // }

    const anunciante = await this.anuncianteCategoriaRepository.create(_anunciante);

    await this.anuncianteCategoriaRepository.save(anunciante);

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
  //     soluction } = await AnuncianteCategoria.update(req.body);

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

export { AnuncianteCategoriaService };
