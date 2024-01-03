import jwt from "jsonwebtoken";

export const AcessoRotas = (req, res, next) => {
  const token = req.headers.authorization;
 
  if (!token) {
    return res.status(401).json({
      message: "Token de usuário não existe",
    });
  }

  const [, tokenEncriptado] = token.split(" ");
  try {
    jwt.verify(tokenEncriptado, process.env.SECRET_PASS_JWT);

    return next();
  } catch (err) {
    return res.status(401).json({
      message: "Token não é válido",
    }); 
  }
};   