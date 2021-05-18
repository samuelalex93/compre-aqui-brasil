import { Request, Response } from "express";

import { GeoPaisService } from "../services/GeoPaisService";

class GeoPaisController {
  async create (req: Request, res: Response): Promise<Response> {
    const _pais = req.body;
    const geoPaisService = new GeoPaisService();

    try { 
      const pais = await geoPaisService.create(_pais);

      return res.json(pais);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;
    const geoPaisService = new GeoPaisService();

    try { 
      const pais = await geoPaisService.findByName(nome);

      return res.json(pais);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }
}

export { GeoPaisController };