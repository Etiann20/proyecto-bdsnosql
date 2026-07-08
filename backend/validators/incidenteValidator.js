import { body, param } from "express-validator";

export const validarCrearIncidente = [
    body("titulo").trim().notEmpty().withMessage("El título es obligatorio"),
    body("descripcion").trim().notEmpty().withMessage("La descripción es obligatoria"),
    body("prioridad").isIn(["Baja", "Media", "Alta", "Crítica"]).withMessage("La prioridad no es válida"),
    body("estado").isIn(["Pendiente", "En Proceso", "Resuelto", "Cerrado"]).withMessage("El estado no es válido"),
    body("usuario").isMongoId().withMessage("El ID del usuario no es válido"),
    body("tecnico").optional().isMongoId().withMessage("El ID del técnico no es válido"),
    body("equipo").isMongoId().withMessage("El ID del equipo no es válido")
];

export const validarActualizarIncidente = [
    body("titulo").optional().trim().notEmpty().withMessage("El título es obligatorio"),
    body("descripcion").optional().trim().notEmpty().withMessage("La descripción es obligatoria"),
    body("prioridad").optional().isIn(["Baja", "Media", "Alta", "Crítica"]).withMessage("La prioridad no es válida"),
    body("estado").optional().isIn(["Pendiente", "En Proceso", "Resuelto", "Cerrado"]).withMessage("El estado no es válido"),
    body("usuario").optional().isMongoId().withMessage("El ID del usuario no es válido"),
    body("tecnico").optional({nullable: true}).isMongoId().withMessage("El ID del técnico no es válido"),
    body("equipo").optional().isMongoId().withMessage("El ID del equipo no es válido")
];

export const validarIdIncidente = [
    param("id").isMongoId().withMessage("El ID del incidente no es válido")
];