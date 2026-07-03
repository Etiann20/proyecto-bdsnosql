import Usuario from "../models/Usuario.js";

// GET /api/usuarios
export const obtenerUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();

        res.status(200).json(usuarios);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener usuarios",
            error: error.message
        });

    }

};

// GET /api/usuarios/:id
export const obtenerUsuarioPorId = async (req, res) => {

    try {

        const usuario = await Usuario.findById(req.params.id);

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        res.status(200).json(usuario);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al buscar usuario",
            error: error.message
        });

    }

};

// POST
export const crearUsuario = async (req, res) => {

    try {

        const usuario = new Usuario(req.body);

        await usuario.save();

        res.status(201).json(usuario);

    } catch (error) {

        res.status(400).json({
            mensaje: "No fue posible crear el usuario",
            error: error.message
        });

    }

};

// PUT
export const actualizarUsuario = async (req, res) => {

    try {

        const usuario = await Usuario.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        res.status(200).json(usuario);

    } catch (error) {

        res.status(400).json({
            mensaje: "No fue posible actualizar",
            error: error.message
        });

    }

};

// DELETE
export const eliminarUsuario = async (req, res) => {

    try {

        const usuario = await Usuario.findByIdAndDelete(req.params.id);

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        res.status(200).json({
            mensaje: "Usuario eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar",
            error: error.message
        });

    }

};