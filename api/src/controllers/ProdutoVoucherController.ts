import { Request, Response } from "express";

import { ProdutoVoucherService } from "../services/ProdutoVoucherService";

class ProdutoVoucherController {
  async create (req: Request, res: Response): Promise<Response> {
    const _voucher = req.body;
    const ProdutoVoucher = new ProdutoVoucherService();
    
    try {
      const voucher = await ProdutoVoucher.create(_voucher);
      return res.json(voucher);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _voucher = req.body;
    const ProdutoVoucher = new ProdutoVoucherService();
    
    try {
      const voucher = await ProdutoVoucher.update(<any>id, _voucher);
      return res.json(voucher);
    } catch (err) {
      res.status(400).json({ 
        message: err
      });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const ProdutoVoucher = new ProdutoVoucherService();

    try { 
      const response = await ProdutoVoucher.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }
}

export { ProdutoVoucherController };
