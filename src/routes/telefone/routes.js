// import uploadsConfig from "../../config/multer.js";
// import multer from "multer";
import TelefoneController from "./controller.js";
import { Router } from "express";

// const upload = multer(uploadsConfig);
const telefoneController = new TelefoneController();
const router = Router();

router.post("/criar-telefone", telefoneController.createPhone);

export default router;