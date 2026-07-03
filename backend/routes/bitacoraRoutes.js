import express from "express";

import {

    obtenerBitacoras,
    obtenerBitacoraPorId,
    crearBitacora,
    actualizarBitacora,
    eliminarBitacora

} from "../controllers/bitacoraController.js";

const router = express.Router();

router.get("/", obtenerBitacoras);

router.get("/:id", obtenerBitacoraPorId);

router.post("/", crearBitacora);

router.put("/:id", actualizarBitacora);

router.delete("/:id", eliminarBitacora);

export default router;