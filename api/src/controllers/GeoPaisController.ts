import { Request, Response } from "express";

import { GeoPaisService } from "../services/GeoPaisService";

class GeoPaisController {
  async listAll (req: Request, res: Response): Promise<Response> {
    const geoPaisService = new GeoPaisService();

    try { 
      const response = await geoPaisService.listAll();
      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const geoPaisService = new GeoPaisService();

    try { 
      const response = await geoPaisService.findById(id);
      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }
}

export { GeoPaisController };