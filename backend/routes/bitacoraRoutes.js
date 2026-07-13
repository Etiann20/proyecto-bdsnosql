import express from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import validarCampos from "../middleware/validarCampos.js";

import {
    validarCrearBitacora,
    validarActualizarBitacora,
    validarIdBitacora
} from "../validators/bitacoraValidator.js";

import {
    obtenerBitacoras,
    obtenerBitacoraPorId,
    crearBitacora,
    actualizarBitacora,
    eliminarBitacora
} from "../controllers/bitacoraController.js";

const router = express.Router();

// CONSULTAR
router.get(
    "/",
    auth,
    authorize("Administrador", "Supervisor"),
    obtenerBitacoras
);

router.get(
    "/:id",
    auth,
    validarIdBitacora,
    validarCampos,
    authorize("Administrador", "Supervisor"),
    obtenerBitacoraPorId
);

// CREAR
router.post(
    "/",
    auth,
    validarCrearBitacora,
    validarCampos,
    authorize("Administrador"),
    crearBitacora
);

// ACTUALIZAR
router.put(
    "/:id",
    auth,
    validarIdBitacora,
    validarActualizarBitacora,
    validarCampos,
    authorize("Administrador"),
    actualizarBitacora
);

// ELIMINAR
router.delete(
    "/:id",
    auth,
    validarIdBitacora,
    validarCampos,
    authorize("Administrador"),
    eliminarBitacora
);

export default router;