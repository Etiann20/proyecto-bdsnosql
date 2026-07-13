import Tecnico from "../models/Tecnico.js";
import { registrarAuditoria } from "../services/auditoriaService.js";

// GET
export const obtenerTecnicos = async (req, res) => {

    try {

        const tecnicos = await Tecnico.find()
        .sort({ createdAt: -1 });

        res.status(200).json(tecnicos);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener técnicos",
            error: error.message
        });

    }

};

// GET ID
export const obtenerTecnicoPorId = async (req, res) => {

    try {

        const tecnico = await Tecnico.findById(req.params.id);

        if (!tecnico) {

            return res.status(404).json({
                mensaje: "Técnico no encontrado"
            });

        }

        res.status(200).json(tecnico);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// POST
export const crearTecnico = async (req, res) => {

    try {

        const tecnico = new Tecnico(req.body);

        await tecnico.save();

        await registrarAuditoria(
            req.usuario.id,
            "Creación de técnico",
            `Se creó el técnico "${tecnico.nombre}".`
        );

        res.status(201).json(tecnico);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

};

// PUT
export const actualizarTecnico = async (req, res) => {

    try {

        const tecnico = await Tecnico.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!tecnico) {

            return res.status(404).json({
                mensaje: "Técnico no encontrado"
            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Actualización de técnico",
            `Se actualizó el técnico "${tecnico.nombre}".`
        );

        res.json(tecnico);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

};

// DELETE
export const eliminarTecnico = async (req, res) => {

    try {

        const tecnico = await Tecnico.findByIdAndDelete(req.params.id);

        if (!tecnico) {

            return res.status(404).json({
                mensaje: "Técnico no encontrado"
            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Eliminación de técnico",
            `Se eliminó el técnico "${tecnico.nombre}".`
        );

        res.json({
            mensaje: "Técnico eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};