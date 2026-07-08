import Bitacora from "../models/Bitacora.js";

export const registrarAuditoria = async (
    usuario,
    accion,
    descripcion
) => {

    try {

        await Bitacora.create({
            usuario,
            accion,
            descripcion
        });

    } catch (error) {

        console.error(
            "Error al registrar auditoría:",
            error.message
        );

    }

};