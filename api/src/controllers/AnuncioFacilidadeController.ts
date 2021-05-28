import { Request, Response } from "express";

import { AnuncioFacilidadeService } from "../services/AnuncioFacilidadeService";

class AnuncioFacilidadeController {
  async create (req: Request, res: Response): Promise<Response> {
    const anuncioFacilidade = req.body;
    const anuncioFacilidadeService = new AnuncioFacilidadeService();

    try { 
      const response = await anuncioFacilidadeService.create(anuncioFacilidade);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const anuncianteId = req.params.id;
    const anuncioFacilidadeService = new AnuncioFacilidadeService();

    try { 
      const response = await anuncioFacilidadeService.findByAnuncianteId(anuncianteId);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const anuncioFacilidade = req.body;
    const anuncioFacilidadeService = new AnuncioFacilidadeService();

    try { 
      const response = await anuncioFacilidadeService.update(<any>id, anuncioFacilidade);

      return res.status(204).json();
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const anuncioFacilidadeService = new AnuncioFacilidadeService();

    try { 
      const response = await anuncioFacilidadeService.delete(id);

      return res.status(204).json(response);
    } catch (e) {
      if(e.error) {
        return res.status(e.error.status).json(e.error.message);
      }

      res.status(500).json({message: "Sorry an error occurred"});
    }
  }
}

export { AnuncioFacilidadeController };