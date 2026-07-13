import Incidente from "../models/Incidente.js";
import { registrarAuditoria } from "../services/auditoriaService.js";
import { registrarHistorialIncidente } from "../services/historialIncidenteService.js";
import Usuario from "../models/Usuario.js";

// GET
export const obtenerIncidentes = async (req, res) => {

    try {

        const incidentes = await Incidente.find()

            .sort({ createdAt: -1 })

            .populate("usuario")

            .populate("tecnico")

            .populate("equipo")

            .populate("evidencias")

            .populate("bitacoras");

        res.status(200).json(incidentes);

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};

// GET ID
export const obtenerIncidentePorId = async (req, res) => {

    try {

        const incidente = await Incidente.findById(req.params.id)

            .populate("usuario")

            .populate("tecnico")

            .populate("equipo")

            .populate("evidencias")

            .populate("bitacoras");

        if (!incidente) {

            return res.status(404).json({

                mensaje: "Incidente no encontrado"

            });

        }

        res.json(incidente);

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};

// POST
export const crearIncidente = async (req, res) => {

    try {

        console.log("BODY:", req.body);

        const usuario = await Usuario.findById(req.usuario.id);

        console.log("USUARIO:", usuario);

        const incidente = new Incidente({

            ...req.body,

            bitacoras: [

                {

                    usuario: usuario.nombre,

                    accion: "🟢 Incidente registrado"

                }

            ]

        });

        console.log("ANTES DEL SAVE");

        await incidente.save();

        console.log("DESPUÉS DEL SAVE");

        await registrarAuditoria(
            req.usuario.id,
            "Creación de incidente",
            `Se creó el incidente "${incidente.titulo}".`
        );

        res.status(201).json(incidente);

    } catch (error) {

        console.error("ERROR CREANDO INCIDENTE:");
        console.error(error);

        res.status(400).json({

            mensaje: error.message

        });

    }

};


// PUT
export const actualizarIncidente = async (req, res) => {

    try {

        const incidente = await Incidente.findById(req.params.id)

            .populate("tecnico")

            .populate("equipo")

            .populate("evidencias");

        if (!incidente) {

            return res.status(404).json({

                mensaje: "Incidente no encontrado"

            });

        }

        await registrarHistorialIncidente(
            incidente,
            req.body,
            req.usuario.id
        );

        incidente.titulo = req.body.titulo;
        incidente.descripcion = req.body.descripcion;
        incidente.prioridad = req.body.prioridad;
        incidente.estado = req.body.estado;
        incidente.usuario = req.body.usuario;
        incidente.tecnico = req.body.tecnico;
        incidente.equipo = req.body.equipo;
        incidente.evidencias = req.body.evidencias;

        await incidente.save();

        await registrarAuditoria(
            req.usuario.id,
            "Actualización de incidente",
            `Se actualizó el incidente "${incidente.titulo}".`
        );

        res.json(incidente);

    } catch (error) {

        res.status(400).json({

            mensaje: error.message

        });

    }

};

// DELETE
export const eliminarIncidente = async (req, res) => {

    try {

        const incidente = await Incidente.findByIdAndDelete(req.params.id);

        if (!incidente) {

            return res.status(404).json({

                mensaje: "Incidente no encontrado"

            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Eliminación de incidente",
            `Se eliminó el incidente "${incidente.titulo}".`
        );

        res.json({

            mensaje: "Incidente eliminado correctamente"

        });

    } catch (error) {

        res.status(500).json({

            mensaje: error.message

        });

    }

};