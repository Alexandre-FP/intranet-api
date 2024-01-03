import SecretariaController from "./controller.js";
import { Router } from "express";
import { AcessoRotas } from "../../middlewares/AcessoRotasAdmin.js";

const router = new Router();
const secretariaController = new SecretariaController();

router.get("/listar-secretarias", secretariaController.listarSecretaria);
router.post("/criar-secretaria", AcessoRotas, secretariaController.createSecretaria);
router.get("/listar-secretaria/:id", secretariaController.listarSecretariaId);
router.put("/atualizar-secretaria/:id", AcessoRotas, secretariaController.atualizarSecretaria);

export default router;  