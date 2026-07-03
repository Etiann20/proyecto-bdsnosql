import express from "express";

import {

    obtenerIncidentes,
    obtenerIncidentePorId,
    crearIncidente,
    actualizarIncidente,
    eliminarIncidente

} from "../controllers/incidenteController.js";

const router = express.Router();

router.get("/", obtenerIncidentes);

router.get("/:id", obtenerIncidentePorId);

router.post("/", crearIncidente);

router.put("/:id", actualizarIncidente);

router.delete("/:id", eliminarIncidente);

export default router;