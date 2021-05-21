import { Request, Response } from "express";

import { ProdutoImportacaodeprodutoService } from "../services/ProdutoImportacaodeprodutoService";

class ProdutoImportacaodeprodutoController {
  async create (req: Request, res: Response): Promise<Response> {
    const _importacao = req.body;
    const ProdutoImportacaodeproduto = new ProdutoImportacaodeprodutoService();
    
    try {
      const importacao = await ProdutoImportacaodeproduto.create(_importacao);
      return res.json(importacao);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _importacao = req.body;
    const ProdutoImportacaodeproduto = new ProdutoImportacaodeprodutoService();
    
    try {
      const importacao = await ProdutoImportacaodeproduto.update(<any>id, _importacao);
      return res.json(importacao);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ProdutoImportacaodeproduto = new ProdutoImportacaodeprodutoService();

    try { 
      const response = await ProdutoImportacaodeproduto.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { ProdutoImportacaodeprodutoController };

