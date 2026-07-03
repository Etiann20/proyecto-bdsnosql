import Bitacora from "../models/Bitacora.js";

// GET
export const obtenerBitacoras = async (req, res) => {

    try {

        const bitacoras = await Bitacora.find()
            .populate("usuario");

        res.status(200).json(bitacoras);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// GET ID
export const obtenerBitacoraPorId = async (req, res) => {

    try {

        const bitacora = await Bitacora.findById(req.params.id)
            .populate("usuario");

        if (!bitacora) {

            return res.status(404).json({
                mensaje: "Bitácora no encontrada"
            });

        }

        res.json(bitacora);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// POST
export const crearBitacora = async (req, res) => {

    try {

        const bitacora = new Bitacora(req.body);

        await bitacora.save();

        res.status(201).json(bitacora);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

};

// PUT
export const actualizarBitacora = async (req, res) => {

    try {

        const bitacora = await Bitacora.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!bitacora) {

            return res.status(404).json({
                mensaje: "Bitácora no encontrada"
            });

        }

        res.json(bitacora);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

};

// DELETE
export const eliminarBitacora = async (req, res) => {

    try {

        const bitacora = await Bitacora.findByIdAndDelete(req.params.id);

        if (!bitacora) {

            return res.status(404).json({
                mensaje: "Bitácora no encontrada"
            });

        }

        res.json({
            mensaje: "Bitácora eliminada correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};