import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export async function register(req: Request, res: Response) {
  const result = await AuthService.register(req.body);
  res.status(result.status).json(result.data);
}

export async function login(req: Request, res: Response) {
  const result = await AuthService.login(req.body);
  res.status(result.status).json(result.data);
}
