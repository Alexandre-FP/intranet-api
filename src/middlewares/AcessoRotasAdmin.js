import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";

export const AcessoRotas = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError("JWT Token não existe", 401);
  }
  
  const [, tokenEncriptado] = token.split(" ");
  try {
    jwt.verify(tokenEncriptado, process.env.SECRET_PASS_JWT);
    return next();
  } catch {
    throw new AppError("JWT Token inválido", 401);
  }
};
