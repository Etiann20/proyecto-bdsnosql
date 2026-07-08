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

router.get("/", auth, authorize("Administrador"), obtenerBitacoras);

router.get("/:id", auth, validarIdBitacora, validarCampos, authorize("Administrador"), obtenerBitacoraPorId);

router.post("/", auth,  validarCrearBitacora, validarCampos, authorize("Administrador"),crearBitacora);

router.put("/:id", auth, validarIdBitacora, validarActualizarBitacora, validarCampos, authorize("Administrador"), actualizarBitacora);

router.delete("/:id", auth, validarIdBitacora, validarCampos, authorize("Administrador"), eliminarBitacora);

export default router;