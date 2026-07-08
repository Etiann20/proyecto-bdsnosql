import express from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import validarCampos from "../middleware/validarCampos.js";
import {
    validarCrearEquipo,
    validarActualizarEquipo,
    validarIdEquipo
 } from "../validators/equipoValidator.js"
import {

    obtenerEquipos,
    obtenerEquipoPorId,
    crearEquipo,
    actualizarEquipo,
    eliminarEquipo

} from "../controllers/equipoController.js";

const router = express.Router();

router.get("/", auth, obtenerEquipos);

router.get("/:id", auth, validarIdEquipo, validarCampos, obtenerEquipoPorId);

router.post("/", auth, validarCrearEquipo, validarCampos, authorize("Administrador", "Supervisor"), crearEquipo);

router.put("/:id", auth, validarIdEquipo, validarActualizarEquipo, validarCampos, authorize("Administrador", "Supervisor"), actualizarEquipo);

router.delete("/:id", auth, validarIdEquipo, validarCampos, authorize("Administrador"), eliminarEquipo);

export default router;