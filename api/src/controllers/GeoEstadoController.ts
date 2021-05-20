import { Request, Response } from "express";

import { GeoEstadoService } from "../services/GeoEstadoService";

class GeoEstadoController {
  async listAll (req: Request, res: Response): Promise<Response> {
    const geoEstadoService = new GeoEstadoService();

    try { 
      const response = await geoEstadoService.listAll();
      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const geoEstadoService = new GeoEstadoService();

    try { 
      const response = await geoEstadoService.findById(id);
      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }
}

export { GeoEstadoController };