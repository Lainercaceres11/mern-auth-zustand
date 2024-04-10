import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No autorizado" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }

  jwt.verify(token, "secret", (error, payload) => {
    if (error) {
      return res.status(401).json({ message: "No autorizado" });
    }

    req.payload = payload;
    console.log(payload);
    next();
  });
};
