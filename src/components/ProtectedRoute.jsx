import { Navigate } from "react-router-dom";

function ProtectedRoute({

    children,

    roles = []

}) {

    const token = localStorage.getItem("token");

    if (!token) {

        return <Navigate to="/login" replace />;

    }

    let usuario = null;

    try {

        const usuarioStorage = localStorage.getItem("usuario");

        if (!usuarioStorage) {

            throw new Error("Usuario inexistente");

        }

        usuario = JSON.parse(usuarioStorage);

    } catch (error) {

        localStorage.removeItem("token");
        localStorage.removeItem("usuario");

        return <Navigate to="/login" replace />;

    }

    if (

        roles.length > 0 &&

        !roles.includes(usuario?.rol)

    ) {

        return <Navigate to="/" replace />;

    }

    return children;

}

export default ProtectedRoute;