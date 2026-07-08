import { body, param } from "express-validator";

export const validarCrearBitacora = [

    body("accion").trim().notEmpty().withMessage("La acción es obligatoria"),
    body("descripcion").trim().notEmpty().withMessage("La descripción es obligatoria"),
    body("usuario").isMongoId().withMessage("El ID del usuario no es válido")
];

export const validarActualizarBitacora = [

    body("accion").optional().trim(),
    body("descripcion").optional().trim(),
    body("usuario").optional().isMongoId()
];

export const validarIdBitacora = [
    param("id").isMongoId()
];