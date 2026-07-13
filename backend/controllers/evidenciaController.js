import Evidencia from "../models/Evidencia.js";
import { registrarAuditoria } from "../services/auditoriaService.js";

// GET
export const obtenerEvidencias = async (req, res) => {

    try {

        const evidencias = await Evidencia.find();

        res.status(200).json(evidencias);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

// GET ID
export const obtenerEvidenciaPorId = async (req, res) => {

    try {

        const evidencia = await Evidencia.findById(req.params.id);

        if (!evidencia) {

            return res.status(404).json({
                mensaje: "Evidencia no encontrada"
            });

        }

        res.json(evidencia);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

// POST
export const crearEvidencia = async (req, res) => {

    try {

        const evidencia = new Evidencia(req.body);

        await evidencia.save();

        await registrarAuditoria(
            req.usuario.id,
            "Creación de evidencia",
            `Se ha creado una nueva evidencia con ID: ${evidencia._id}.`
        );

        res.status(201).json(evidencia);

    } catch (error) {

        res.status(400).json({ mensaje: error.message });

    }

};

// PUT
export const actualizarEvidencia = async (req, res) => {

    try {

        const evidencia = await Evidencia.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!evidencia) {

            return res.status(404).json({
                mensaje: "Evidencia no encontrada"
            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Actualización de evidencia",
            `Se ha actualizado la evidencia con ID: ${evidencia._id}.`
        );

        res.json(evidencia);

    } catch (error) {

        res.status(400).json({ mensaje: error.message });

    }

};

// DELETE
export const eliminarEvidencia = async (req, res) => {

    try {

        const evidencia = await Evidencia.findByIdAndDelete(req.params.id);

        if (!evidencia) {

            return res.status(404).json({
                mensaje: "Evidencia no encontrada"
            });

        }

        await registrarAuditoria(
            req.usuario.id,
            "Eliminación de evidencia",
            `Se ha eliminado la evidencia con ID: ${evidencia._id}.`
        );

        res.json({
            mensaje: "Evidencia eliminada correctamente"
        });

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};