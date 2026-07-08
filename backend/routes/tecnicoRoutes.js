import express from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import validarCampos from "../middleware/validarCampos.js";
import {
    validarCrearTecnico,
    validarActualizarTecnico,
    validarIdTecnico
} from "../validators/tecnicoValidator.js";

import {

    obtenerTecnicos,
    obtenerTecnicoPorId,
    crearTecnico,
    actualizarTecnico,
    eliminarTecnico

} from "../controllers/tecnicoController.js";

const router = express.Router();

router.get("/", auth, obtenerTecnicos);

router.get("/:id", auth, validarIdTecnico, validarCampos, obtenerTecnicoPorId);

router.post("/", auth, validarCrearTecnico, validarCampos, authorize("Administrador"), crearTecnico);

router.put("/:id", auth, validarIdTecnico, validarActualizarTecnico, validarCampos, authorize("Administrador"), actualizarTecnico);

router.delete("/:id", auth, validarIdTecnico, validarCampos, authorize("Administrador"), eliminarTecnico);

export default router;