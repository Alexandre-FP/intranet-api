import UsuarioController from "./controller.js";
import { Router } from "express";

const routes = Router();
const usuarioController = new UsuarioController();

routes.get("/listar-usuarios", usuarioController.listarUsuario);
routes.get("/criar-usuario", usuarioController.createUsuario);

export default routes;