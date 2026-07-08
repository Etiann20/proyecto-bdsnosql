import { body, param } from "express-validator";

export const validarCrearEvidencia = [
    body("nombreArchivo").trim().notEmpty().withMessage("El nombre del archivo es obligatorio"),
    body("tipoArchivo").trim().notEmpty().withMessage("El tipo de archivo es obligatorio"),
    body("url").trim().isURL().withMessage("La URL no es válida"),
    body("descripcion").trim().notEmpty().withMessage("La descripción es obligatoria")
];

export const validarActualizarEvidencia = [
    body("nombreArchivo").optional().trim().notEmpty().withMessage("El nombre del archivo es obligatorio"),
    body("tipoArchivo").optional().trim().notEmpty().withMessage("El tipo de archivo es obligatorio"),
    body("url").optional().trim().isURL().withMessage("La URL no es válida"),
    body("descripcion").optional().trim().notEmpty().withMessage("La descripción es obligatoria")
];

export const validarIdEvidencia = [
    param("id").isMongoId().withMessage("El ID de la evidencia no es válido")
];