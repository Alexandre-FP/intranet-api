import TelefoneController from "./controller.js";
import { Router } from "express";
import { AcessoRotas } from "../../middlewares/AcessoRotasAdmin.js";


const telefoneController = new TelefoneController();
const router = Router();

router.post("/criar-telefone", AcessoRotas, telefoneController.createTelefone);
router.get("/listar-telefones", telefoneController.listarTelefone);
router.get("/listar-telefone/:id", telefoneController.listarTelefoneId);
router.put("/atualizar-telefone/:id", AcessoRotas, telefoneController.atualizarTelefone);

export default router;  