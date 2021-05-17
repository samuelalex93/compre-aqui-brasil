import { Request, Response } from "express";

import { UsuarioUsuarioService } from "../services/UsuarioUsuarioService";

class UsuarioUsuarioController {
  async create (req: Request, res: Response): Promise<Response> {
    const _user = req.body;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const user = await usuarioUsuarioService.create(_user);

      return res.json(user);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const user = await usuarioUsuarioService.findByEmail(email);

      return res.json(user);
    } catch (err) {
      res.status(400).json({ 
        message: err.message 
      });
    }
  }
}

export { UsuarioUsuarioController };