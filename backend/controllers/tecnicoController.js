import Tecnico from "../models/Tecnico.js";

// GET
export const obtenerTecnicos = async (req, res) => {

    try {

        const tecnicos = await Tecnico.find();

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

        res.json({
            mensaje: "Técnico eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};