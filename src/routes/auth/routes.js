import UsuarioController from "./controller.js";
import { Router } from "express";
import { AcessoRotas } from "../../middlewares/AcessoRotasAdmin.js";

const routes = Router();
const usuarioController = new UsuarioController;

routes.get("/listar-usuarios", AcessoRotas, usuarioController.listarUsuario);
routes.post("/criar-usuario", AcessoRotas, usuarioController.createUsuario);
routes.post("/login", usuarioController.loginUsuario);

export default routes; 