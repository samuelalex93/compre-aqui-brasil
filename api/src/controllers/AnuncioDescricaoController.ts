import { Request, Response } from "express";

import { AnuncioDescricaoService } from "../services/AnuncioDescricaoService";

class AnuncioDescricaoController {
  async create (req: Request, res: Response): Promise<Response> {
    const anuncioDescricao = req.body;
    const anuncioDescricaoService = new AnuncioDescricaoService();

    try { 
      const response = await anuncioDescricaoService.create(anuncioDescricao);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const anuncianteId = req.params.id;
    const anuncioDescricaoService = new AnuncioDescricaoService();

    try { 
      const response = await anuncioDescricaoService.findByAnuncianteId(anuncianteId);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const anuncioDescricao = req.body;
    const anuncioDescricaoService = new AnuncioDescricaoService();

    try { 
      const response = await anuncioDescricaoService.update(<any>id, anuncioDescricao);

      return res.status(204).json();
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const anuncioDescricaoService = new AnuncioDescricaoService();

    try { 
      const response = await anuncioDescricaoService.delete(id);

      return res.status(204).json(response);
    } catch (e) {
      if(e.error) {
        return res.status(e.error.status).json(e.error.message);
      }

      res.status(500).json({message: "Sorry an error occurred"});
    }
  }
}

export { AnuncioDescricaoController };