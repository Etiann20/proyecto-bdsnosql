import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/header.css";

function Header() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({

        nombre: "",

        rol: ""

    });

    useEffect(() => {

        try {
    
            const usuarioStorage = localStorage.getItem("usuario");
    
            if (!usuarioStorage) return;
    
            const usuarioGuardado = JSON.parse(usuarioStorage);
    
            setUsuario(usuarioGuardado);
    
        } catch (error) {
    
            console.error("Error al leer el usuario:", error);
    
            localStorage.removeItem("usuario");
    
            localStorage.removeItem("token");
    
            navigate("/login", {
    
                replace: true
    
            });
    
        }
    
    }, [navigate]);

    const fecha = new Date().toLocaleDateString("es-CL", {

        day: "2-digit",

        month: "long",

        year: "numeric",

    });

    const cerrarSesion = () => {

        if (!window.confirm("¿Desea cerrar sesión?")) return;

        localStorage.removeItem("token");

        localStorage.removeItem("usuario");

        navigate("/login", {

            replace: true

        });

    };

    return (

        <header className="header">

            <div>

                <h2>Dashboard</h2>

                <span>{fecha}</span>

            </div>

            <div className="header-user">

                <div className="user-circle">

                    {

                        usuario.nombre

                            ? usuario.nombre.charAt(0).toUpperCase()

                            : "?"

                    }

                </div>

                <div>

                    <h4>

                        {

                            usuario.nombre || "Usuario"

                        }

                    </h4>

                    <span>

                        {

                            usuario.rol || "Sin rol"

                        }

                    </span>

                </div>

                <button

                    className="logout-btn"

                    onClick={cerrarSesion}

                >

                    Cerrar sesión

                </button>

            </div>

        </header>

    );

}

export default Header;