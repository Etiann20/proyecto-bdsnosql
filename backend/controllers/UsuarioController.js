import Usuario from "../models/Usuario.js";

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los usuarios",
            error: error.message
        });
    }
};

// Obtener un usuario por ID
export const obtenerUsuario = async (req, res) => {
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
            mensaje: "Error al obtener el usuario",
            error: error.message
        });
    }
};

// Crear usuario
export const crearUsuario = async (req, res) => {
    try {

        const nuevoUsuario = new Usuario(req.body);

        const usuarioGuardado = await nuevoUsuario.save();

        res.status(201).json(usuarioGuardado);

    } catch (error) {

        res.status(400).json({
            mensaje: "Error al crear el usuario",
            error: error.message
        });

    }
};

// Actualizar usuario
export const actualizarUsuario = async (req, res) => {
    try {

        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!usuarioActualizado) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json(usuarioActualizado);

    } catch (error) {

        res.status(400).json({
            mensaje: "Error al actualizar el usuario",
            error: error.message
        });

    }
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {

    try {

        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);

        if (!usuarioEliminado) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Usuario eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar el usuario",
            error: error.message
        });

    }

};