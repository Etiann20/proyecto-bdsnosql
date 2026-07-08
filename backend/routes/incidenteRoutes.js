import express from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import validarCampos from "../middleware/validarCampos.js";
import {
    validarCrearIncidente,
    validarActualizarIncidente,
    validarIdIncidente
} from "../validators/incidenteValidator.js";
import {

    obtenerIncidentes,
    obtenerIncidentePorId,
    crearIncidente,
    actualizarIncidente,
    eliminarIncidente

} from "../controllers/incidenteController.js";

const router = express.Router();

router.get("/", auth, obtenerIncidentes);

router.get("/:id", auth, validarIdIncidente, validarCampos, obtenerIncidentePorId);

router.post("/", auth, validarCrearIncidente, validarCampos, authorize("Administrador", "Supervisor"), crearIncidente);

router.put("/:id", auth, validarIdIncidente, validarActualizarIncidente, validarCampos, authorize("Administrador", "Supervisor"), actualizarIncidente);

router.delete("/:id", auth, validarIdIncidente, validarCampos, authorize("Administrador"), eliminarIncidente);

export default router;