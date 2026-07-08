import Usuario from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;

        // Buscar al usuario por su correo
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(404).json({
                mensaje: "Correo no registrado"
            });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!isMatch) {
            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: usuario._id, rol: usuario.rol },
            process.env.JWT_SECRET,
            { expiresIn: "4h" }
        );

        res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol
            }
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al iniciar sesión",
            error: error.message
        });
    }
};