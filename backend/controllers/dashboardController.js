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

            cerrados,

            incidentesPorEstado,

            incidentesPorPrioridad,

            incidentesPorMes,

            tecnicoMasIncidentes,

            equipoMasIncidentes

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
            }),

            // Incidentes por estado
            Incidente.aggregate([
                {
                    $group: {
                        _id: "$estado",
                        cantidad: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        cantidad: -1
                    }
                }
            ]),

            // Incidentes por prioridad
            Incidente.aggregate([
                {
                    $group: {
                        _id: "$prioridad",
                        cantidad: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        cantidad: -1
                    }
                }
            ]),

            // Incidentes por mes
            Incidente.aggregate([
                {
                    $group: {
                        _id: {
                            $month: "$createdAt"
                        },
                        cantidad: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]),

            // Técnico con más incidentes
            Incidente.aggregate([
                {
                    $match: {
                        tecnico: {
                            $ne: null
                        }
                    }
                },
                {
                    $group: {
                        _id: "$tecnico",
                        cantidad: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        cantidad: -1
                    }
                },
                {
                    $limit: 1
                }
            ]),

            // Equipo con más incidentes
            Incidente.aggregate([
                {
                    $group: {
                        _id: "$equipo",
                        cantidad: {
                            $sum: 1
                        }
                    }
                },
                {
                    $sort: {
                        cantidad: -1
                    }
                },
                {
                    $limit: 1
                }
            ])

        ]);

        let topTecnico = null;

        if (tecnicoMasIncidentes.length > 0) {

            const tecnico = await Tecnico.findById(
                tecnicoMasIncidentes[0]._id
            );

            if (tecnico) {

                topTecnico = {

                    nombre: tecnico.nombre,

                    cantidad: tecnicoMasIncidentes[0].cantidad

                };

            }

        }

        let topEquipo = null;

        if (equipoMasIncidentes.length > 0) {

            const equipo = await Equipo.findById(
                equipoMasIncidentes[0]._id
            );

            if (equipo) {

                topEquipo = {

                    nombre: equipo.nombre,

                    cantidad: equipoMasIncidentes[0].cantidad

                };

            }

        }

        res.json({

            usuarios,

            tecnicos,

            equipos,

            incidentes,

            criticos,

            pendientes,

            resueltos,

            cerrados,

            incidentesPorEstado,

            incidentesPorPrioridad,

            incidentesPorMes,

            topTecnico,

            topEquipo

        });

    } catch (error) {

        res.status(500).json({

            mensaje: "Error al obtener estadísticas.",

            error: error.message

        });

    }

};