import { Request, Response } from "express";

import { AnuncianteCategoriaService } from "../services/AnuncianteCategoriaService";

class AnuncianteCategoriaController {
  async create (req: Request, res: Response): Promise<Response> {
    const _categoria = req.body;
    const anuncianteCategoria = new AnuncianteCategoriaService();
    
    try {
      const anunciante = await anuncianteCategoria.create(_categoria);
      return res.json(anunciante);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _categoria = req.body;
    const anuncianteCategoria = new AnuncianteCategoriaService();
    
    try {
      const anunciante = await anuncianteCategoria.update(<any>id, _categoria);
      return res.json(anunciante);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const anuncianteCategoria = new AnuncianteCategoriaService();

    try { 
      const response = await anuncianteCategoria.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { AnuncianteCategoriaController };
