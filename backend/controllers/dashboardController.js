import Usuario from "../models/Usuario.js";
import Tecnico from "../models/Tecnico.js";
import Equipo from "../models/Equipo.js";
import Incidente from "../models/Incidente.js";

export const obtenerDashboard = async (req, res) => {

    try {

        const [

            usuarios,

            tecnicos,

            equipos,

            incidentes,

            criticos,

            pendientes,

            resueltos,

            cerrados

        ] = await Promise.all([

            Usuario.countDocuments(),

            Tecnico.countDocuments(),

            Equipo.countDocuments(),

            Incidente.countDocuments(),

            Incidente.countDocuments({
                prioridad: "Crítica"
            }),

            Incidente.countDocuments({
                estado: "Pendiente"
            }),

            Incidente.countDocuments({
                estado: "Resuelto"
            }),

            Incidente.countDocuments({
                estado: "Cerrado"
            })

        ]);

        res.json({

            usuarios,

            tecnicos,

            equipos,

            incidentes,

            criticos,

            pendientes,

            resueltos,

            cerrados

        });

    } catch (error) {

        res.status(500).json({

            mensaje: "Error al obtener estadísticas.",

            error: error.message

        });

    }

};