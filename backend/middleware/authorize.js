const authorize = (...rolesPermitidos) => {
    return (req, res, next) => {

        // Verifica que auth.js haya autenticado al usuario
        if (!req.usuario) {
            return res.status(401).json({
                mensaje: "Usuario no autenticado."
            });
        }

        // Verifica si el rol está autorizado
        if (!rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({
                mensaje: "No tiene permisos para realizar esta acción."
            });
        }

        next();
    };
};

export default authorize;