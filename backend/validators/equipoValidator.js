import {body, param} from "express-validator";

export const validarCrearEquipo = [
    body("nombre").trim().notEmpty().withMessage("El nombre del equipo es obligatorio"),
    body("tipo").isIn(["Servidor", "Computador", "Router", "Firewall", "Switch", "Otro"]).withMessage("El tipo de equipo no es válido").withMessage("El tipo de equipo es obligatorio"),
    body("ubicacion").trim().notEmpty().withMessage("La ubicación del equipo es obligatoria"),
    body("direccionIP").trim().notEmpty().withMessage("La direccion IP es obligatoria").isIP().withMessage("La direccion IP es inválida"),
    body("sistemaOperativo").trim().notEmpty().withMessage("El sistema operativo es obligatorio"),
    body("estado").optional().isIn(["Operativo", "En Mantención", "Fuera de Servicio"]).withMessage("El estado del equipo no es válido")
];

export const validarActualizarEquipo = [
    body("nombre").optional().trim().notEmpty().withMessage("El nombre del equipo es obligatorio"),
    body("tipo").optional().isIn(["Servidor", "Computador", "Router", "Firewall", "Switch", "Otro"]).withMessage("El tipo de equipo no es válido"),
    body("ubicacion").optional().trim().notEmpty().withMessage("La ubicación del equipo es obligatoria"),
    body("direccionIP").optional().trim().isIP().withMessage("La direccion IP es inválida"),
    body("sistemaOperativo").optional().trim().notEmpty().withMessage("El sistema operativo es obligatorio"),
    body("estado").optional().isIn(["Operativo", "En Mantención", "Fuera de Servicio"]).withMessage("El estado del equipo no es válido")
];

export const validarIdEquipo = [
    param("id").isMongoId().withMessage("El ID del equipo no es válido")
];