import SecretariaController from "./controller.js";
import { Router } from "express";

const router = new Router();
const secretariaController = new SecretariaController();

router.get("/listar-secretarias", secretariaController.listarSecretaria);
router.post("/criar-secretaria", secretariaController.createSecretaria);
router.get("/listar-secretaria/:id", secretariaController.listarSecretariaId);
router.put("/atualizar-secretaria/:id", secretariaController.atualizarSecretaria);

export default router;  