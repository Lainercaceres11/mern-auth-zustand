import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = async (req: Request, res: Response) => {
  // Crea JWT
  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  return res.json({ token });
};

export const profileHandler = async (req: Request, res: Response) => {
    return res.json({ profile: req.payload });
  };
  
