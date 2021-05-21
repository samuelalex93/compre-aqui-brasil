import { Request, Response } from "express";

import { AnuncianteAnuncianteService } from "../services/AnuncianteAnuncianteService";

class AnuncianteAnuncianteController {
  async create (req: Request, res: Response): Promise<Response> {
    const _anunciante = req.body;
    const anuncianteAnunciante = new AnuncianteAnuncianteService();
    
    try {
      const anunciante = await anuncianteAnunciante.create(_anunciante);
      return res.json(anunciante);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _anunciante = req.body;
    const anuncianteAnunciante = new AnuncianteAnuncianteService();
    
    try {
      const anunciante = await anuncianteAnunciante.update(<any>id, _anunciante);
      return res.json(anunciante);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const anuncianteAnunciante = new AnuncianteAnuncianteService();

    try { 
      const user = await anuncianteAnunciante.findByEmail(email);

      return res.json(user);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const anuncianteAnunciante = new AnuncianteAnuncianteService();

    try { 
      const response = await anuncianteAnunciante.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { AnuncianteAnuncianteController };
