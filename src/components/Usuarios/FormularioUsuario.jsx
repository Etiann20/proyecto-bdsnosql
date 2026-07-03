import { useState } from "react";
import api from "../../services/api";

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

        <form onSubmit={handleSubmit}>

            <div>

                <label>Nombre</label>

                <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre"
                />

            </div>

            <br />

            <div>

                <label>Correo</label>

                <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    placeholder="Ingrese el correo"
                />

            </div>

            <br />

            <div>

                <label>Rol</label>

                <select
                    name="rol"
                    value={formulario.rol}
                    onChange={handleChange}
                >
                    <option>Administrador</option>
                    <option>Supervisor</option>
                    <option>Analista</option>
                </select>

            </div>

            <br />

            <button type="submit">

                Guardar Usuario

            </button>

        </form>

    );

}

export default FormularioUsuario;