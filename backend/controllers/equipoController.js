import Equipo from "../models/Equipo.js";

// GET
export const obtenerEquipos = async (req, res) => {

    try {

        const equipos = await Equipo.find();

        res.status(200).json(equipos);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// GET ID
export const obtenerEquipoPorId = async (req, res) => {

    try {

        const equipo = await Equipo.findById(req.params.id);

        if (!equipo) {

            return res.status(404).json({
                mensaje: "Equipo no encontrado"
            });

        }

        res.json(equipo);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

// POST
export const crearEquipo = async (req, res) => {

    try {

        const equipo = new Equipo(req.body);

        await equipo.save();

        res.status(201).json(equipo);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

};

// PUT
export const actualizarEquipo = async (req, res) => {

    try {

        const equipo = await Equipo.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!equipo) {

            return res.status(404).json({
                mensaje: "Equipo no encontrado"
            });

        }

        res.json(equipo);

    } catch (error) {

        res.status(400).json({
            mensaje: error.message
        });

    }

};

// DELETE
export const eliminarEquipo = async (req, res) => {

    try {

        const equipo = await Equipo.findByIdAndDelete(req.params.id);

        if (!equipo) {

            return res.status(404).json({
                mensaje: "Equipo no encontrado"
            });

        }

        res.json({
            mensaje: "Equipo eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};