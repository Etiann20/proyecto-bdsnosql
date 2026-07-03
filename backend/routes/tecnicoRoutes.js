import express from "express";

import {

    obtenerTecnicos,
    obtenerTecnicoPorId,
    crearTecnico,
    actualizarTecnico,
    eliminarTecnico

} from "../controllers/tecnicoController.js";

const router = express.Router();

router.get("/", obtenerTecnicos);

router.get("/:id", obtenerTecnicoPorId);

router.post("/", crearTecnico);

router.put("/:id", actualizarTecnico);

router.delete("/:id", eliminarTecnico);

export default router;