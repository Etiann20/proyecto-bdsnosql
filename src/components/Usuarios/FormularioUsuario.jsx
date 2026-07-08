import { useState } from "react";

function FormularioUsuario({ onGuardar }) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        rol: "Administrador"
    });

    const handleChange = (e) => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onGuardar(formulario);

        setFormulario({
            nombre: "",
            correo: "",
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
                    placeholder="Ingrese el nombre"
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
                    placeholder="Ingrese el correo"
                    required
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

            <button
                type="submit"
                className="btn-guardar"
            >
                Guardar Usuario
            </button>

        </form>

    );

}

export default FormularioUsuario;