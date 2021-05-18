import { Request, Response } from "express";

import { AnuncianteCategoriaService } from "../services/AnuncianteCategoriaService";

class AnuncianteAnuncianteController {
  async create (req: Request, res: Response): Promise<Response> {
    const _anunciante = req.body;
    const anuncianteCategoria = new AnuncianteCategoriaService();

    try { 
      const anunciante = await anuncianteCategoria.create(_anunciante);

      return res.json(anunciante);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }

  // async findOne(req: Request, res: Response): Promise<Response> {
  //   const { nome } = req.body;
  //   const anuncianteAnunciante = new AnuncianteAnuncianteService();

  //   try { 
  //     const cidade = await anuncianteAnunciante.findByName(nome);

  //     return res.json(cidade);
  //   } catch (err) {
  //     res.status(400).json({ 
  //       message: err.message 
  //     });
  //   }
  // }
}

export { AnuncianteAnuncianteController };
