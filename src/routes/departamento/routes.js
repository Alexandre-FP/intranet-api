import DepartamentoController from "./controller.js";
import { Router } from "express";

const departamentoController = new DepartamentoController();
const router = Router();

router.post("/criar-departamento", departamentoController.createDepartamento);
router.get("/listar-departamentos", departamentoController.listarDepartamento);

export default router;