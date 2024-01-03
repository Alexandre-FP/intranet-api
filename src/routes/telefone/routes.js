import multer from "multer";
import multerConfig from "../../config/multer.js"
import TelefoneController from "./controller.js";
import { Router } from "express";
import { AcessoRotas } from "../../middlewares/AcessoRotasAdmin.js";


const telefoneController = new TelefoneController();
const router = Router();

router.post("/criar-telefone", AcessoRotas, multer(multerConfig).single('images'), telefoneController.createTelefone);
router.get("/listar-telefones", telefoneController.listarTelefone);

export default router; 