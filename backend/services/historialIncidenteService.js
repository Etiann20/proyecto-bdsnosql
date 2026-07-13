import Usuario from "../models/Usuario.js";
import Tecnico from "../models/Tecnico.js";
import Equipo from "../models/Equipo.js";
import Evidencia from "../models/Evidencia.js";

export const registrarHistorialIncidente = async (
    incidente,
    datosActualizados,
    usuarioId
) => {

    try {

        const usuario = await Usuario.findById(usuarioId);

        // Estado
        if (
            datosActualizados.estado &&
            datosActualizados.estado !== incidente.estado
        ) {

            incidente.bitacoras.push({

                usuario: usuario.nombre,

                accion: `🔄 Estado: ${incidente.estado} → ${datosActualizados.estado}`

            });

        }

        // Técnico
        if (
            datosActualizados.tecnico &&
            (
                !incidente.tecnico ||
                datosActualizados.tecnico.toString() !== incidente.tecnico.toString()
            )
        ) {

            const tecnico = await Tecnico.findById(datosActualizados.tecnico);

            incidente.bitacoras.push({

                usuario: usuario.nombre,

                accion: `👨‍🔧 Técnico asignado: ${tecnico?.nombre ?? "Desconocido"}`

            });

        }

        // Equipo
        if (
            datosActualizados.equipo &&
            datosActualizados.equipo.toString() !== incidente.equipo.toString()
        ) {

            const equipo = await Equipo.findById(datosActualizados.equipo);

            incidente.bitacoras.push({

                usuario: usuario.nombre,

                accion: `💻 Equipo asignado: ${equipo?.nombre ?? "Desconocido"}`

            });

        }

        // Evidencias
        if (datosActualizados.evidencias) {

            const anteriores = incidente.evidencias.map(e => e.toString()).sort();

            const nuevas = [...datosActualizados.evidencias].sort();

            if (JSON.stringify(anteriores) !== JSON.stringify(nuevas)) {

                const evidencias = await Evidencia.find({

                    _id: { $in: nuevas }

                });

                incidente.bitacoras.push({

                    usuario: usuario.nombre,

                    accion: `📎 Evidencias: ${evidencias
                        .map(e => e.nombreArchivo)
                        .join(", ")}`

                });

            }

        }

    } catch (error) {

        console.error("Error historial incidente:", error);

    }

};