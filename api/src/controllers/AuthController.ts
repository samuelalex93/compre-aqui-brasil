import { Request, Response } from "express";

import { AuthService } from "../services/AuthService";

class AuthController {
  async login (req: Request, res: Response): Promise<Response> {
    const _usuario = req.body;
    const authService = new AuthService();
    try {
      const response = await authService.create(_usuario);
      return res.json(response);
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }

  async changePassword (req: Request, res: Response): Promise<Response> {
    const id = res.locals.jwtPayload.userId;
    const _usuario = req.body;
    const authService = new AuthService();

    try {
      const response = await authService.changePassword(id, _usuario);
      return res.status(204).json();
    } catch (e) {
      return res.status(e.error.status).json(e.error.message);
    }
  }
}

export { AuthController }