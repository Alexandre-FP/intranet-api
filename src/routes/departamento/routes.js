import DepartamentoController from "./controller.js";
import { Router } from "express";
import { AcessoRotas } from "../../middlewares/AcessoRotasAdmin.js";

const departamentoController = new DepartamentoController();
const router = Router();

router.post("/criar-departamento", AcessoRotas, departamentoController.createDepartamento);
router.get("/listar-departamentos", departamentoController.listarDepartamento);

export default router;