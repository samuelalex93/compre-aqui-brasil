import { Request, Response } from "express";

import { GeoCidadeService } from "../services/GeoCidadeService";

class GeoCidadeController {
  async listAll (req: Request, res: Response): Promise<Response> {
    const { page } = req.query;
    const geoCidadeService = new GeoCidadeService();

    try { 
      const response = await geoCidadeService.listAll(<any>page);

      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findByEstado (req: Request, res: Response): Promise<Response> {
    const { page } = req.query;
    const estadoId = req.params.id;
    const geoCidadeService = new GeoCidadeService();

    try { 
      const response = await geoCidadeService.findByEstado(<any>page, <any>estadoId);

      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const geoCidadeService = new GeoCidadeService();

    try { 
      const response = await geoCidadeService.findById(id);

      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }
}

export { GeoCidadeController };