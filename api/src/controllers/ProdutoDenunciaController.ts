import { Request, Response } from "express";

import { ProdutoDenunciaService } from "../services/ProdutoDenunciaService";

class ProdutoDenunciaController {
  async create (req: Request, res: Response): Promise<Response> {
    const _denuncia = req.body;
    const ProdutoDenuncia = new ProdutoDenunciaService();
    
    try {
      const denuncia = await ProdutoDenuncia.create(_denuncia);
      return res.json(denuncia);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _denuncia = req.body;
    const ProdutoDenuncia = new ProdutoDenunciaService();
    
    try {
      const denuncia = await ProdutoDenuncia.update(<any>id, _denuncia);
      return res.json(denuncia);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ProdutoDenuncia = new ProdutoDenunciaService();

    try { 
      const response = await ProdutoDenuncia.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { ProdutoDenunciaController };

