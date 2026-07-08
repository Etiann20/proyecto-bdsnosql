import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");

    const [contrasena, setContrasena] = useState("");

    const [error, setError] = useState("");

    const iniciarSesion = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const respuesta = await api.post("/auth/login", {

                correo,

                contrasena

            });

            localStorage.setItem(

                "token",

                respuesta.data.token

            );

            localStorage.setItem(

                "usuario",

                JSON.stringify(respuesta.data.usuario)

            );

            navigate("/");

        } catch (error) {

            console.log(error);
        
            console.log(error.response);
        
            console.log(error.response?.data);
        
            setError(
                error.response?.data?.mensaje ||
                "No fue posible iniciar sesión."
            );
        
        }

    };

    return (

        <div className="login-container">

            <form
                className="login-card"
                onSubmit={iniciarSesion}
            >

                <h2>

                    Sistema Gestión Incidentes

                </h2>

                <input

                    type="email"

                    placeholder="Correo"

                    value={correo}

                    onChange={(e) =>

                        setCorreo(e.target.value)

                    }

                    required

                />

                <input

                    type="password"

                    placeholder="Contraseña"

                    value={contrasena}

                    onChange={(e) =>

                        setContrasena(e.target.value)

                    }

                    required

                />

                {

                    error &&

                    <p className="login-error">

                        {error}

                    </p>

                }

                <button type="submit">

                    Iniciar sesión

                </button>

            </form>

        </div>

    );

}

export default Login;