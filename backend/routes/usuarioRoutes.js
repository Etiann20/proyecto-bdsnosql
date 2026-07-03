import express from "express";

import {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../controllers/UsuarioController.js";

const router = express.Router();

// Obtener todos los usuarios
router.get("/", obtenerUsuarios);

// Obtener usuario por ID
router.get("/:id", obtenerUsuario);

// Crear usuario
router.post("/", crearUsuario);

// Actualizar usuario
router.put("/:id", actualizarUsuario);

// Eliminar usuario
router.delete("/:id", eliminarUsuario);

export default router;