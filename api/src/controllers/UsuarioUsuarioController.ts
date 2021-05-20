import { Request, Response } from "express";

import { UsuarioUsuarioService } from "../services/UsuarioUsuarioService";

class UsuarioUsuarioController {
  async create (req: Request, res: Response): Promise<Response> {
    const _usuario = req.body;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const response = await usuarioUsuarioService.create(_usuario);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async findByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const response = await usuarioUsuarioService.findByEmail(email);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const response = await usuarioUsuarioService.findOne(id);

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const _usuario = req.body;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const response = await usuarioUsuarioService.update(id, _usuario);

      return res.status(204).json(response.id);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const response = await usuarioUsuarioService.listAll();

      return res.json(response);
    } catch (e) {
      res.status(e.error.status).json(e.error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const usuarioUsuarioService = new UsuarioUsuarioService();

    try { 
      const response = await usuarioUsuarioService.delete(id);

      return res.status(204).json(response);
    } catch (e) {
      if(e.error) {
        return res.status(e.error.status).json(e.error.message);
      }

      res.status(500).json({message: "Sorry an error occurred"});
    }
  }
}

export { UsuarioUsuarioController };