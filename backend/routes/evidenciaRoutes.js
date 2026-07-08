import express from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import validarCampos from "../middleware/validarCampos.js";

import {
    validarCrearEvidencia,
    validarActualizarEvidencia,
    validarIdEvidencia
} from "../validators/evidenciaValidator.js";

import {
    obtenerEvidencias,
    obtenerEvidenciaPorId,
    crearEvidencia,
    actualizarEvidencia,
    eliminarEvidencia
} from "../controllers/evidenciaController.js";

const router = express.Router();

router.get("/", auth, obtenerEvidencias);

router.get("/:id", auth, validarIdEvidencia, validarCampos, obtenerEvidenciaPorId);

router.post("/", auth, validarCrearEvidencia, validarCampos, authorize("Administrador", "Supervisor"), crearEvidencia);

router.put("/:id", auth, validarIdEvidencia, validarActualizarEvidencia, validarCampos, authorize("Administrador", "Supervisor"), actualizarEvidencia);

router.delete("/:id", auth, validarIdEvidencia, validarCampos, authorize("Administrador"), eliminarEvidencia);

export default router;