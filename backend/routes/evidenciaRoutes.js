import express from "express";

import {
    obtenerEvidencias,
    obtenerEvidenciaPorId,
    crearEvidencia,
    actualizarEvidencia,
    eliminarEvidencia
} from "../controllers/evidenciaController.js";

const router = express.Router();

router.get("/", obtenerEvidencias);

router.get("/:id", obtenerEvidenciaPorId);

router.post("/", crearEvidencia);

router.put("/:id", actualizarEvidencia);

router.delete("/:id", eliminarEvidencia);

export default router;