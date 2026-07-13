import { useEffect, useState } from "react";

function FormularioUsuario({

    onGuardar,

    usuarioEditando

}) {

    const [formulario, setFormulario] = useState({

        nombre: "",

        correo: "",

        contrasena: "",

        rol: "Administrador"

    });

    const [error, setError] = useState("");

    useEffect(() => {

        if (usuarioEditando) {

            setFormulario({

                _id: usuarioEditando._id,

                nombre: usuarioEditando.nombre,

                correo: usuarioEditando.correo,

                contrasena: "",

                rol: usuarioEditando.rol

            });

        } else {

            setFormulario({

                nombre: "",

                correo: "",

                contrasena: "",

                rol: "Administrador"

            });

        }

        setError("");

    }, [usuarioEditando]);

    const handleChange = (e) => {

        setFormulario({

            ...formulario,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        const datos = { ...formulario };

        if (usuarioEditando && datos.contrasena.trim() === "") {

            delete datos.contrasena;

        }

        const resultado = await onGuardar(datos);

        if (!resultado.ok) {

            setError(resultado.mensaje);

            return;

        }

        setFormulario({

            nombre: "",

            correo: "",

            contrasena: "",

            rol: "Administrador"

        });

    };

    return (

        <form

            className="formulario-usuario"

            onSubmit={handleSubmit}

        >

            <div className="form-group">

                <label>Nombre</label>

                <input

                    type="text"

                    name="nombre"

                    value={formulario.nombre}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="form-group">

                <label>Correo</label>

                <input

                    type="email"

                    name="correo"

                    value={formulario.correo}

                    onChange={handleChange}

                    required

                />

            </div>

            <div className="form-group">

                <label>Contraseña</label>

                <input

                    type="password"

                    name="contrasena"

                    value={formulario.contrasena}

                    onChange={handleChange}

                    placeholder={

                        usuarioEditando

                            ? "Dejar vacío para mantener"

                            : "Ingrese contraseña"

                    }

                    required={!usuarioEditando}

                />

            </div>

            <div className="form-group">

                <label>Rol</label>

                <select

                    name="rol"

                    value={formulario.rol}

                    onChange={handleChange}

                >

                    <option value="Administrador">

                        Administrador

                    </option>

                    <option value="Supervisor">

                        Supervisor

                    </option>

                    <option value="Analista">

                        Analista

                    </option>

                </select>

            </div>

            {

                error &&

                <p className="form-error">

                    ❌ {error}

                </p>

            }

            <button

                className="btn-guardar"

                type="submit"

            >

                {

                    usuarioEditando

                        ? "Actualizar Usuario"

                        : "Guardar Usuario"

                }

            </button>

        </form>

    );

}

export default FormularioUsuario;