import { body, param } from "express-validator";

export const validarCrearTecnico = [
    body("nombre").trim().notEmpty().withMessage("El nombre del técnico es obligatorio"),
    body("correo").trim().isEmail().notEmpty().withMessage("El email no es válido"),
    body("telefono").optional().trim().isMobilePhone("es-CL").withMessage("El teléfono es inválido"),
    body("especialidad").trim().notEmpty().withMessage("La especialidad es obligatoria"),
    body("estado").optional().isIn(["Disponible", "Ocupado", "Ausente"]).withMessage("El estado del técnico no es válido")
];

export const validarActualizarTecnico = [
    body("nombre").optional().trim().notEmpty().withMessage("El nombre del técnico es obligatorio"),
    body("correo").optional().trim().isEmail().withMessage("El email no es válido"),
    body("telefono").optional().trim().isMobilePhone("es-CL").withMessage("El teléfono es inválido"),
    body("especialidad").optional().trim().notEmpty().withMessage("La especialidad es obligatoria"),
    body("estado").optional().isIn(["Disponible", "Ocupado", "Ausente"]).withMessage("El estado del técnico no es válido")
];

export const validarIdTecnico = [
    param("id").isMongoId().withMessage("El ID del técnico no es válido")
];