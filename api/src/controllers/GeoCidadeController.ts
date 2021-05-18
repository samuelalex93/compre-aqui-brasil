import { Request, Response } from "express";

import { GeoCidadeService } from "../services/GeoCidadeService";

class GeoCidadeController {
  async create (req: Request, res: Response): Promise<Response> {
    const _cidade = req.body;
    const geoCidadeService = new GeoCidadeService();

    try { 
      const cidade = await geoCidadeService.create(_cidade);

      return res.json(cidade);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;
    const geoCidadeService = new GeoCidadeService();

    try { 
      const cidade = await geoCidadeService.findByName(nome);

      return res.json(cidade);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }
}

export { GeoCidadeController };