import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try{
        const authheader = req.headers.authorization;

        if (!authheader || !authheader.startsWith("Bearer ")) {
            return res.status(401).json({ mensaje: "No autorizado" });
        }

        const token = authheader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.usuario = decoded;

        next();
    } catch (error) {
        res.status(401).json({ mensaje: "Token no válido" });
    }
};

export default auth;