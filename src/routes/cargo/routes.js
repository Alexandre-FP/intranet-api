import { Router } from "express";
import CargoController from "./controller.js";

const router = Router();
const cargoController = new CargoController();

router.post("/criar-cargo", cargoController.createCargo);
router.get("/listar-cargos", cargoController.listarCargo);

export default router;