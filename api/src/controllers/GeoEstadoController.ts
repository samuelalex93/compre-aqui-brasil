import { Request, Response } from "express";

import { GeoEstadoService } from "../services/GeoEstadoService";

class GeoEstadoController {
  async create (req: Request, res: Response): Promise<Response> {
    const _estado = req.body;
    const geoEstadoService = new GeoEstadoService();

    try { 
      const estado = await geoEstadoService.create(_estado);

      return res.json(estado);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;
    const geoEstadoService = new GeoEstadoService();

    try { 
      const estado = await geoEstadoService.findByName(nome);

      return res.json(estado);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }
}

export { GeoEstadoController };