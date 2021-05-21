import { Request, Response } from "express";

import { ProdutoWishlistService } from "../services/ProdutoWishlistService";

class ProdutoWishlistController {
  async create (req: Request, res: Response): Promise<Response> {
    const _wishlist = req.body;
    const ProdutoWishlist = new ProdutoWishlistService();
    
    try {
      const wishlist = await ProdutoWishlist.create(_wishlist);
      return res.json(wishlist);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _wishlist = req.body;
    const ProdutoWishlist = new ProdutoWishlistService();
    
    try {
      const wishlist = await ProdutoWishlist.update(<any>id, _wishlist);
      return res.json(wishlist);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ProdutoWishlist = new ProdutoWishlistService();

    try { 
      const response = await ProdutoWishlist.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { ProdutoWishlistController };

