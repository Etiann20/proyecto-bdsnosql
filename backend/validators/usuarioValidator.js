import {body, param} from "express-validator";

export const validarCrearUsuario = [

    body("nombre").trim().notEmpty().withMessage("El nombre es obligatorio"),
    body("email").trim().isEmail().notEmpty().withMessage("El email no es válido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("rol").trim().isIn(["Administrador", "Supervisor", "Analista"]).withMessage("El rol no es válido")
];

export const validarActualizarUsuario = [

    body("nombre").optional().trim().notEmpty().withMessage("El nombre es obligatorio"),
    body("email").optional().trim().isEmail().withMessage("El email no es válido"),
    body("contrasena").optional().isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("rol").optional().isIn(["Administrador", "Supervisor", "Analista"]).withMessage("El rol no es válido")
];

export const validarIdUsuario = [
    
    param("id").isMongoId().withMessage("El ID del usuario no es válido")
];