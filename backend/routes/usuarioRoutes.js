import express from "express";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import validarCampos from "../middleware/validarCampos.js";
import {
    validarCrearUsuario,
    validarActualizarUsuario,
    validarIdUsuario
} from "../validators/usuarioValidator.js";
import {

    obtenerUsuarios,

    obtenerUsuarioPorId,

    crearUsuario,

    actualizarUsuario,

    eliminarUsuario

} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", auth, authorize("Administrador"), obtenerUsuarios);

router.get("/:id", validarIdUsuario, auth, authorize("Administrador"), validarCampos, obtenerUsuarioPorId);

router.post("/", auth, authorize("Administrador"), validarCrearUsuario, validarCampos,crearUsuario);

router.put("/:id", auth, validarIdUsuario, authorize("Administrador"), validarActualizarUsuario, validarCampos, actualizarUsuario);

router.delete("/:id", auth, validarIdUsuario, authorize("Administrador"), validarCampos, eliminarUsuario);

export default router;