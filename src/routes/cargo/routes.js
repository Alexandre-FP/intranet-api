import { Router } from "express";
import CargoController from "./controller.js";
import { AcessoRotas } from "../../middlewares/AcessoRotasAdmin.js";

const router = Router();
const cargoController = new CargoController();

router.post("/criar-cargo", AcessoRotas, cargoController.createCargo);
router.get("/listar-cargos", cargoController.listarCargo);

export default router;