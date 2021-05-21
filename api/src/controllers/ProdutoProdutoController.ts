import { Request, Response } from "express";

import { ProdutoProdutoService } from "../services/ProdutoProdutoService";

class ProdutoProdutoController {
  async create (req: Request, res: Response): Promise<Response> {
    const _produto = req.body;
    const ProdutoProduto = new ProdutoProdutoService();
    
    try {
      const produto = await ProdutoProduto.create(_produto);
      return res.json(produto);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _produto = req.body;
    const ProdutoProduto = new ProdutoProdutoService();
    
    try {
      const produto = await ProdutoProduto.update(<any>id, _produto);
      return res.json(produto);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ProdutoProduto = new ProdutoProdutoService();

    try { 
      const response = await ProdutoProduto.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { ProdutoProdutoController };
