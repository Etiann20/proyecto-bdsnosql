import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
import { registrarAuditoria } from "../services/auditoriaService.js";

// GET /api/usuarios
export const obtenerUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find()
        .select("-contrasena")
        .sort({ createdAt: -1 });

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

        const usuario = await Usuario.findById(req.params.id).select("-contrasena");

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

        const { nombre, correo, contrasena, rol } = req.body;

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

        const usuario = new Usuario({

            nombre,

            correo,

            contrasena: hashedPassword,

            rol

        });

        await usuario.save();

        await registrarAuditoria(

            req.usuario.id,

            "Creación de usuario",

            `Se creó el usuario "${nombre}" (${correo}).`

        );

        const usuarioCreado = await Usuario.findById(usuario._id).select("-contrasena");

        res.status(201).json(usuarioCreado);

    } catch (error) {

        if (error.code === 11000) {

            return res.status(400).json({

                mensaje: "El correo ya está registrado."

            });

        }

        res.status(400).json({

            mensaje: "No fue posible crear el usuario",

            error: error.message

        });

    }

};

// PUT
export const actualizarUsuario = async (req, res) => {

    try {

        if (req.body.contrasena) {

            req.body.contrasena = await bcrypt.hash(

                req.body.contrasena,

                10

            );

        }

        const usuario = await Usuario.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true,

                runValidators: true

            }

        ).select("-contrasena");

        if (!usuario) {

            return res.status(404).json({

                mensaje: "Usuario no encontrado"

            });

        }

        await registrarAuditoria(

            req.usuario.id,

            "Actualización de usuario",

            `Se actualizó el usuario "${usuario.nombre}" (${usuario.correo}).`

        );

        res.status(200).json(usuario);

    } catch (error) {

        if (error.code === 11000) {

            return res.status(400).json({

                mensaje: "El correo ya está registrado."

            });

        }

        res.status(400).json({

            mensaje: "No fue posible actualizar el usuario",

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

        await registrarAuditoria(

            req.usuario.id,

            "Eliminación de usuario",

            `Se eliminó el usuario "${usuario.nombre}" (${usuario.correo}).`

        );

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